import { useEffect, useRef, useState } from 'react';
import { useAnnualityStore, useStore, useSetStep, useAddons } from './store';
import { ANNUALITY } from './constans';
import { useNavigate } from 'react-router-dom';
import { Addon } from './store';

const useFetch = <T>(fetchData: (annuality: string) => Promise<Array<T>>) => {
	const { annuality } = useAnnualityStore();
	const [state, setState] = useState<{ data: Array<T>; loading: boolean }>({
		data: [],
		loading: false
	});

	const startGetData = () => {
		setState({
			...state,
			loading: true
		});
	};

	const getDataSuccess = () => {
		fetchData(annuality).then(data =>
			setState({
				...state,
				data,
				loading: false
			})
		);
	};

	useEffect(() => {
		startGetData();
		getDataSuccess();
	}, [annuality]);

	const { data, loading } = state;

	return { data, loading };
};

const useChangePlan = (id: string, title: string) => {
	const { plan: selectedPlan, setPlan, removePlan } = useStore();
	const { annuality } = useAnnualityStore();

	console.log(selectedPlan?.id);

	const handleOnClick = () => {
		if (selectedPlan?.id === id) {
			removePlan();
		} else {
			setPlan({ id, title });
		}
	};

	useEffect(() => {
		if (selectedPlan?.title === title) {
			setPlan({ ...selectedPlan, id });
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

	const nextStep = () => {
		if (step === STEP.ONE && plan) {
			setStep(step + 1);
			navigate('/addons');
		}
	};

	const prevStep = () => {
		if (step === STEP.TWO) {
			setStep(step - 1);
			navigate('/plans');
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

const useAddonsId = (addonApi: Addon) => {
	const { addons, setMonthlyPlan, removeAddon, addonsFromApi } = useAddons();
	const { annuality } = useAnnualityStore();
	const previousAnnuality = usePrevious(annuality);

	console.log('from api', addonsFromApi);
	console.log(addons);

	const findAddon = (addons: Addon[]) =>
		addons?.find(addon => addon.id === addonApi.id);

	let exists = findAddon(addons);
	let checked = exists ? true : false;

	const handleAddId = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked;
		if (checked && !exists)
			setMonthlyPlan({ id: addonApi.id, title: addonApi.title });
		else removeAddon(addonApi.id);
	};

	useEffect(() => {
		console.log('from useEffect', addonsFromApi);
		if (annuality !== previousAnnuality) {
			setMonthlyPlan(addonsFromApi);
		}
	}, [annuality && addonsFromApi]);

	return { handleAddId, checked };
};

export { useSwitchAnnuality, useChangePlan, useFetch, useButton, useAddonsId };
