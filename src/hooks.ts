import { useEffect } from 'react';
import axios from 'axios';
import { useAnnualityStore, usePlanStore, useStepStore } from './context/store';
import { ANNUALITY } from './shared/constans';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { storeAddons } from './addons/store/addon.store';
import { AddonFromApi, AddonWithId } from './addons/addon.model';

const apiURL = 'http://localhost:3000';

const PlanMapper = (plan: PlanApi) => ({
	id: plan._id,
	title: plan.title,
	price: plan.price,
	annuality: plan.annuality,
	image: plan.image
});

const AddonMapper = (addon: AddonFromApi) => ({
	id: addon._id,
	title: addon.title,
	price: addon.price,
	annuality: addon.annuality,
	content: addon.content
});

const useGetPlans = () => {
	const { annuality } = useAnnualityStore();
	const { data, isLoading } = useQuery<Plan[]>(['plans', annuality], () =>
		axios<PlanApi[]>(`${apiURL}/plans/${annuality}`).then(res =>
			res.data.map(PlanMapper)
		)
	);

	return { data, isLoading };
};

const useGetAddons = () => {
	const { annuality } = useAnnualityStore();
	const { data, isLoading } = useQuery<AddonWithId[]>(
		['addons', annuality],
		() =>
			axios<AddonFromApi[]>(`${apiURL}/addons/${annuality}`).then(res =>
				res.data.map(AddonMapper)
			)
	);

	return { data, isLoading };
};

const useChangePlan = (planToChange: PlanToChange) => {
	const { plan: selectedPlan, setPlan, removePlan } = usePlanStore();
	const { annuality } = useAnnualityStore();

	const handleOnClick = () => {
		if (selectedPlan?.id === planToChange.id) {
			removePlan();
		} else {
			setPlan({
				id: planToChange.id,
				title: planToChange.title,
				annuality,
				price: planToChange.price
			});
		}
	};

	useEffect(() => {
		if (selectedPlan?.title === planToChange.title) {
			setPlan({
				...selectedPlan,
				id: planToChange.id,
				price: planToChange.price
			});
		}
	}, [annuality]);

	const isPlanSelected = selectedPlan?.id === planToChange.id;

	return { handleOnClick, isPlanSelected };
};

const useSwitchAnnuality = () => {
	const { annuality, setAnnuality } = useAnnualityStore();

	const isMonthly = annuality === ANNUALITY.MONTHLY;
	const isYearly = annuality === ANNUALITY.YEARLY;

	const changeAnnuality = () =>
		isYearly ? ANNUALITY.MONTHLY : ANNUALITY.YEARLY;

	const handleOnClick = () => {
		setAnnuality(changeAnnuality());
	};

	return { handleOnClick, annuality, isMonthly, isYearly };
};

const STEP = {
	ONE: 1,
	TWO: 2,
	THREE: 3
};

const useButton = () => {
	const { step, setStep, setConfirm, confirm } = useStepStore();
	const navigate = useNavigate();
	const { plan } = usePlanStore();
	const { addons } = storeAddons();

	const nextStep = () => {
		if (step === STEP.ONE && plan) {
			setStep(step + 1);
			navigate('/addons');
		}
		if (step === STEP.TWO && addons.length !== 0) {
			setStep(step + 1);
			navigate('/summary');
		}
		if (step === STEP.THREE && addons) {
			setConfirm(true);
		}
	};

	const prevStep = () => {
		if (step === STEP.TWO) {
			setStep(step - 1);
			navigate('/plans');
		}
		if (step === STEP.THREE) {
			setStep(step - 1);
			navigate('/addons');
		}
	};

	const showBack = step > 1 && step <= 3 && !confirm;

	const showNext = !confirm;

	return { step, nextStep, prevStep, confirm, showBack, showNext };
};

const useGetTotal = () => {
	const { plan } = usePlanStore();
	const { addons } = storeAddons();
	const { annuality } = useAnnualityStore();
	const { setStep } = useStepStore();
	const navigate = useNavigate();

	const addonsPrices = addons.map(addon => addon.price);
	const prices = [plan?.price, addonsPrices];

	const { data } = useQuery(['total', prices], () =>
		axios.post<number>(`${apiURL}/order/total`, prices)
	);

	const move = () => {
		setStep(1);
		navigate('/plans');
	};

	return { data, move, annuality, addons, plan };
};

type PlanToChange = {
	id: string;
	title: string;
	price: number;
};

export type PlanApi = {
	_id: string;
	title: string;
	price: number;
	annuality: string;
	image: string;
};

export type Plan = {
	id: string;
	title: string;
	price: number;
	annuality: string;
	image: string;
};

export {
	useSwitchAnnuality,
	useChangePlan,
	useButton,
	useGetPlans,
	useGetAddons,
	useGetTotal
};
