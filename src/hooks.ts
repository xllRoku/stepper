import { useEffect, useState } from 'react';
import { useAnnualityStore, usePlanStore } from './store';
import { ANNUALITY } from './constans';

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
	const { plan: selectedPlan, setPlan } = usePlanStore();
	const { annuality } = useAnnualityStore();

	console.log(selectedPlan?.id);

	const handleOnClick = () => {
		setPlan({ id, title });
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

export { useSwitchAnnuality, useChangePlan, useFetch };
