import { useEffect, useState } from 'react';
import { IPlanApi, PlanMemoryService } from './services';
import { useAnnualityStore } from './store';

const PlanMapper = (plans: IPlanApi): IPlanApi => ({
	id: plans.id,
	title: plans.title,
	image: plans.image,
	price: plans.price,
	annuality: plans.annuality
});

const usePlans = () => {
	const store = useAnnualityStore();

	console.log(store.annuality);

	const [plans, setPlans] = useState<{
		data: Array<IPlanApi>;
		loading: boolean;
	}>({
		data: [],
		loading: false
	});

	useEffect(() => {
		setPlans({
			...plans,
			loading: true
		});
		PlanMemoryService()
			.getPlan(store.annuality)
			.then(data =>
				setPlans({
					...plans,
					data: data.map(p => PlanMapper(p)),
					loading: false
				})
			);
	}, [store.annuality]);

	const { data, loading } = plans;

	return { data, loading };
};

export { usePlans };
