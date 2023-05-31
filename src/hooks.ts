import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
	useAnnualityStore,
	usePlanStore,
	useStepStore,
	useAddonStore
} from './context/store';
import { ANNUALITY } from './constans';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Addon as AddonStore } from './context/store';

const apiURL = 'http://localhost:3000';

const PlanMapper = (plan: PlanApi) => ({
	id: plan._id,
	title: plan.title,
	price: plan.price,
	annuality: plan.annuality,
	image: plan.image
});

const AddonMapper = (addon: AddonApi) => ({
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
	const { data, isLoading } = useQuery<Addon[]>(['addons', annuality], () =>
		axios<AddonApi[]>(`${apiURL}/addons/${annuality}`).then(res =>
			res.data.map(AddonMapper)
		)
	);

	return { data, isLoading };
};

const useChangePlan = (id: string, title: string, price: number) => {
	const { plan: selectedPlan, setPlan, removePlan } = usePlanStore();
	const { annuality } = useAnnualityStore();

	console.log(selectedPlan?.id);

	const handleOnClick = () => {
		if (selectedPlan?.id === id) {
			removePlan();
		} else {
			setPlan({ id: id, title, annuality, price });
		}
	};

	useEffect(() => {
		if (selectedPlan?.title === title) {
			setPlan({ ...selectedPlan, id: id, price });
		}
	}, [annuality]);

	const isPlanSelected = selectedPlan?.id === id;

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
	const { addons } = useAddonStore();

	console.log(addons);

	const nextStep = () => {
		if (step === STEP.ONE && plan) {
			setStep(step + 1);
			navigate('/addons');
		}
		if (step === STEP.TWO && addons.length !== 0) {
			console.log('next step');
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

const usePrevious = (value: string) => {
	const previousValueRef = useRef('');
	const [currentValue, setCurrentValue] = useState('');

	useEffect(() => {
		previousValueRef.current = currentValue;
		setCurrentValue(value);
	}, [value]);

	return [previousValueRef.current, currentValue];
};

const useAddonsId = (addonApi: Addon) => {
	const { addons, setMonthlyPlan, removeAddon, addonsFromApi } =
		useAddonStore();
	const { annuality } = useAnnualityStore();
	const [previousAnnuality, currentValue] = usePrevious(annuality);

	console.log(addonsFromApi);

	useEffect(() => {
		if (currentValue !== previousAnnuality) {
			setMonthlyPlan(addonsFromApi);
		}
	}, [
		currentValue,
		previousAnnuality,
		addonsFromApi && addonsFromApi.length
	]);

	const findAddon = (addons: AddonStore[]) =>
		addons?.find(addon => addon?.id === addonApi?.id);

	let exists = findAddon(addons);
	let checked = exists ? true : false;

	const handleAddId = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked;
		if (checked && !exists)
			setMonthlyPlan({
				id: addonApi.id,
				title: addonApi.title,
				price: addonApi.price
			});
		else removeAddon(addonApi.id);
	};

	return { handleAddId, checked };
};

const useGetTotal = () => {
	const { plan } = usePlanStore();
	const { addons } = useAddonStore();
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

export type AddonApi = {
	_id: string;
	title: string;
	price: number;
	annuality: string;
	content: string;
};

export type Addon = {
	id: string;
	title: string;
	price: number;
	annuality: string;
	content: string;
};

export {
	useSwitchAnnuality,
	useChangePlan,
	useButton,
	useAddonsId,
	useGetPlans,
	useGetAddons,
	useGetTotal
};
