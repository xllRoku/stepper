import { useEffect, useState } from 'react';
import { useAnnualityStore, usePlanStore, useSetStep } from './store';
import { ANNUALITY } from './constans';
import { useNavigate } from 'react-router-dom';

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
	const { plan: selectedPlan, setPlan, removePlan } = usePlanStore();
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
	const [isSelected, setIsSelected] = useState(false);
	const storeAnnuality = useAnnualityStore();

	const isMonthly = storeAnnuality.annuality === ANNUALITY.MONTHLY;
	const isYearly = storeAnnuality.annuality === ANNUALITY.YEARLY;

	const changeAnnuality = () =>
		isYearly ? ANNUALITY.MONTHLY : ANNUALITY.YEARLY;

	const handleOnClick = () => {
		setIsSelected(!isSelected);
		storeAnnuality.setAnnuality(changeAnnuality());
	};

	return { isSelected, handleOnClick, isMonthly, isYearly };
};

const STEP = {
	ONE: 1,
	TWO: 2,
	THREE: 3
};

const useButton = () => {
	const { step, setStep } = useSetStep();
	const navigate = useNavigate();
	const { plan } = usePlanStore();

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

export { useSwitchAnnuality, useChangePlan, useFetch, useButton };
