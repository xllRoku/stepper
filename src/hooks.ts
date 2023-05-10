import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useAnnualityStore, useStore, useSetStep, useAddons } from './store';
import { ANNUALITY } from './constans';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Addon as AddonStore } from './store';
import { When } from './functional.component';

const apiURL = 'http://localhost:3000';

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
	const { plan: selectedPlan, setPlan, removePlan } = useStore();
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
	const { step, setStep } = useSetStep();
	const navigate = useNavigate();
	const { plan } = useStore();
	const { addons } = useAddons();

	const nextStep = () => {
		if (step === STEP.ONE && plan) {
			setStep(step + 1);
			navigate('/addons');
		}
		if (step === STEP.TWO && addons) {
			setStep(step + 1);
			navigate('/summary');
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

	return { step, nextStep, prevStep };
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
	const { addons, setMonthlyPlan, removeAddon, addonsFromApi } = useAddons();
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

const useAnnuality = () => {};

export {
	useSwitchAnnuality,
	useChangePlan,
	useButton,
	useAddonsId,
	useGetPlans,
	useGetAddons
};
