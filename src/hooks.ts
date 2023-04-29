import { useEffect, useState } from 'react';
import { useAnnualityStore } from './store';
import type { Plan } from './api';
import * as api from './api';
import { ANNUALITY } from './constans';

// import { createSignal } from 'solid-js';
// import { useNavigate } from 'react-router-dom';
// import * as auth from './auth/auth';
// import * as api from './api';
// import { useAnnualityStore, usePlanStore } from './store';
// import { ANNUALITY } from './constans';
// import { IPlan } from './payment/plan/plan';
// import { IPlanApi, AddonApi } from './api';

// const PlanMapper = (plans: IPlanApi): IPlanApi => ({
// 	id: plans.id,
// 	title: plans.title,
// 	image: plans.image,
// 	price: plans.price,
// 	annuality: plans.annuality
// });

// const AddonMapper = (addons: AddonApi): AddonApi => ({
// 	title: addons.title,
// 	content: addons.content,
// 	price: addons.price,
// 	annuality: addons.annuality
// });

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

// const useAddons = () => {
// 	const store = useAnnualityStore();
// 	const [addons, setAddons] = useState<{
// 		data: Array<api.AddonApi>;
// 		loading: boolean;
// 	}>({
// 		data: [],
// 		loading: false
// 	});

// 	const startGetAddons = () => {
// 		setAddons({
// 			...addons,
// 			loading: true
// 		});
// 	};

// 	const getAddonsSuccess = () => {
// 		api.getAddons(store.annuality).then(data =>
// 			setAddons({
// 				...addons,
// 				data: data.map(a => AddonMapper(a))
// 			})
// 		);
// 	};

// 	useEffect(() => {
// 		startGetAddons();
// 		getAddonsSuccess();
// 	}, [store.annuality]);

// 	const { data, loading } = addons;

// 	return { data, loading };
// };

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

// const useAnnuality = (plan: IPlan) => {
// 	const store = usePlanStore();

// 	const handleOnClick = () => {
// 		store.setPlan({
// 			id: plan.id,
// 			title: plan.title,
// 			price: plan.price,
// 			annuality: plan.annuality
// 		});
// 	};

// 	const isPlanSelected = store.plan?.title === plan.title;

// 	return { handleOnClick, isPlanSelected };
// };

export { usePlans, useSwitchAnnuality };
