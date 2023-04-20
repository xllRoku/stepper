import { useEffect, useState } from 'react';
import { IPlanApi, PlanMemoryService } from './services';

const PlanMapper = (plans: IPlanApi): IPlanApi => ({
	id: plans.id,
	title: plans.title,
	image: plans.image,
	price: plans.price,
	annuality: plans.annuality
});

const usePlans = () => {
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
			.getPlan('monthly')
			.then(data =>
				setPlans({
					...plans,
					data: data.map(p => PlanMapper(p)),
					loading: false
				})
			);
	}, []);

	const { data, loading } = plans;

	return { data, loading };
};

export { usePlans };
