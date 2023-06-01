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
};

const useChangePlan = (id: string, title: string, price: number) => {
	const { plan: selectedPlan, setPlan, removePlan } = useStore();
	const { annuality } = useAnnualityStore();

	const handleOnClick = () => {
		if (selectedPlan?.id === id) {
			removePlan();
		} else {
			setPlan({ id, title, annuality, price });
		}
	};

	useEffect(() => {
		if (selectedPlan?.title === title) {
			setPlan({ ...selectedPlan, id, price });
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
	const ref = useRef('');
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

const useAddonsId = (addonApi: AddonApi) => {
	const { addons, setMonthlyPlan, removeAddon, addonsFromApi } = useAddons();
	const { annuality } = useAnnualityStore();
	const previousAnnuality = usePrevious(annuality);

	console.log(addonsFromApi);

	useEffect(() => {
		if (annuality !== previousAnnuality) {
			if (addonsFromApi?.length !== 0) {
				setMonthlyPlan(addonsFromApi);
			}
		}
	}, [annuality, addonsFromApi]);

	const findAddon = (addons: Addon[]) =>
		addons?.find(addon => addon.id === addonApi._id);

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

export {
	useSwitchAnnuality,
	useChangePlan,
	useGetAddons,
	useButton,
	useAddonsId,
	useGetPlans
};
