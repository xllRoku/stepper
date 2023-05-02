import { useEffect, useState } from 'react';
import { useAnnualityStore, usePlanStore } from './store';
import type { Plan } from './api';
import * as api from './api';
import { ANNUALITY } from './constans';

const usePlans = () => {
	const store = useAnnualityStore();

	const [plans, setPlans] = useState<{
		data: Array<Plan>;
		loading: boolean;
	}>({
		data: [],
		loading: false
	});

	const startGetPlans = () => {
		setPlans({
			...plans,
			loading: true
		});
	};

	const getPlansSuccess = () => {
		api.getPlan(store.annuality).then(data =>
			setPlans({
				...plans,
				data
			})
		);
	};

	useEffect(() => {
		startGetPlans();
		getPlansSuccess();
	}, [store.annuality]);

	const { data, loading } = plans;

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

export { usePlans, useSwitchAnnuality, useChangePlan };
