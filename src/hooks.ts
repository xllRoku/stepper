<<<<<<< HEAD
import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useAnnualityStore, useStore, useSetStep, useAddons } from './store';
import { ANNUALITY } from './constans';
import { useNavigate } from 'react-router-dom';
import { Addon } from './store';
import { AddonApi, PlanApi } from './api';

const apiURL = 'http://localhost:3000';

const get = (url: string) => axios(url).then(res => res.data);

const useGetPlans = () => {
	const { annuality } = useAnnualityStore();
	const { data, isLoading } = useQuery<PlanApi[]>(['plans', annuality], () =>
		get(`${apiURL}/plans/${annuality}`)
	);

	return { data, isLoading };
};

const useGetAddons = () => {
	const { annuality } = useAnnualityStore();
	const { data, isLoading } = useQuery<AddonApi[]>(
		['addons', annuality],
		() => get(`${apiURL}/addons/${annuality}`)
	);

	return { data, isLoading };
=======
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
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac
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

<<<<<<< HEAD
const useAddonsId = (addonApi: AddonApi) => {
	const { addons, setMonthlyPlan, removeAddon, addonsFromApi } = useAddons();
=======
const useAddonsId = (addonApi: Addon) => {
	const { addons, setMonthlyPlan, removeAddon, addonsFromApi } =
		useAddonStore();
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac
	const { annuality } = useAnnualityStore();
	const [previousAnnuality, currentValue] = usePrevious(annuality);

	console.log(addonsFromApi);

	useEffect(() => {
<<<<<<< HEAD
		if (annuality !== previousAnnuality) {
			if (addonsFromApi?.length !== 0) {
				setMonthlyPlan(addonsFromApi);
			}
=======
		if (currentValue !== previousAnnuality) {
			setMonthlyPlan(addonsFromApi);
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac
		}
	}, [
		currentValue,
		previousAnnuality,
		addonsFromApi && addonsFromApi.length
	]);

<<<<<<< HEAD
	const findAddon = (addons: Addon[]) =>
		addons?.find(addon => addon.id === addonApi._id);
=======
	const findAddon = (addons: AddonStore[]) =>
		addons?.find(addon => addon?.id === addonApi?.id);
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac

	let exists = findAddon(addons);
	let checked = exists ? true : false;

	const handleAddId = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked;
		if (checked && !exists)
			setMonthlyPlan({
				id: addonApi._id,
				title: addonApi.title,
				price: addonApi.price
			});
		else removeAddon(addonApi._id);
	};

	return { handleAddId, checked };
};

<<<<<<< HEAD
export {
	useSwitchAnnuality,
	useChangePlan,
	useGetAddons,
	useButton,
	useAddonsId,
	useGetPlans
=======
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
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac
};
