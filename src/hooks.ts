// import { useEffect, useState, useCallback, FormEvent } from 'react';
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

// const usePlans = () => {
// 	const store = useAnnualityStore();

// 	const [plans, setPlans] = useState<{
// 		data: Array<IPlanApi>;
// 		loading: boolean;
// 	}>({
// 		data: [],
// 		loading: false
// 	});

// 	const startGetPlans = () => {
// 		setPlans({
// 			...plans,
// 			loading: true
// 		});
// 	};

// 	const getPlansSuccess = () => {
// 		api.getPlan(store.annuality).then(data =>
// 			setPlans({
// 				...plans,
// 				data: data.map(p => PlanMapper(p))
// 			})
// 		);
// 	};

// 	useEffect(() => {
// 		startGetPlans();
// 		getPlansSuccess();
// 	}, [store.annuality]);

// 	const { data, loading } = plans;

// 	return { data, loading };
// };

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

// const useSwitchAnnuality = () => {
// 	const [isSelected, setIsSelected] = useState(false);
// 	const storeAnnuality = useAnnualityStore();

// 	const isMonthly = storeAnnuality.annuality === ANNUALITY.MONTHLY;
// 	const isYearly = storeAnnuality.annuality === ANNUALITY.YEARLY;

// 	const changeAnnuality = () =>
// 		isYearly ? ANNUALITY.MONTHLY : ANNUALITY.YEARLY;

// 	const handleOnClick = () => {
// 		setIsSelected(!isSelected);
// 		storeAnnuality.setAnnuality(changeAnnuality());
// 	};

// 	return { isSelected, handleOnClick, isMonthly, isYearly };
// };

// const useLogin = () => {
// 	// const nagivate = useNavigate();

// 	const [data, setData] = useState({
// 		email: '',
// 		password: '',
// 		loading: false,
// 		error: ''
// 	});

// 	const handleOnChange = useCallback((event: any) => {
// 		const { name, value } = event.target;
// 		setData(prevData => ({ ...prevData, [name]: value }));
// 	}, []);

// 	const handleOnSubmit = (event: FormEvent) => {
// 		const { email, password } = data;
// 		setData({ ...data, loading: true, error: '' });

// 		event.preventDefault();

// 		setTimeout(() => {
// 			auth.registerUser({ email, password })
// 				.then(response => {
// 					if (response.status === 200) {
// 						setData(prevData => ({
// 							...prevData,
// 							loading: false,
// 							error: ''
// 						}));
// 						// nagivate('/payment/plan');
// 					}
// 				})
// 				.catch(error => {
// 					setData(prevData => ({
// 						...prevData,
// 						loading: false,
// 						error:
// 							error.response?.data.errorMessage ||
// 							'Unknown error occurred'
// 					}));
// 				});
// 		}, 1000);
// 	};

// 	const { loading, error } = data;

// 	return { handleOnChange, handleOnSubmit, loading, error };
// };

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

// export { usePlans, useSwitchAnnuality, useAnnuality, useAddons };
