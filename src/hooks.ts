import { useEffect, useState, useCallback, FormEvent } from 'react';
import { IPlanApi, PlanMemoryService } from './services';
import { useAnnualityStore } from './store';
import { ANNUALITY } from './constans';
import { useNavigate } from '@tanstack/react-location';
import axios from 'axios';

const PlanMapper = (plans: IPlanApi): IPlanApi => ({
	id: plans.id,
	title: plans.title,
	image: plans.image,
	price: plans.price,
	annuality: plans.annuality
});

const usePlans = () => {
	const store = useAnnualityStore();

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

const useLogin = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		email: '',
		password: ''
	});

	const handleOnChange = useCallback((event: any) => {
		const { name, value } = event.target;
		setData(prevData => ({ ...prevData, [name]: value }));
	}, []);

	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		const url = 'http://localhost:3000';
		const endpoint = 'user/register';
		axios
			.post(`${url}/${endpoint}`, {
				email: data.email,
				password: data.password
			})
			.then(res => console.log(res.data))
			.catch(err => console.log(err.response?.data.errorMessage));

		navigate({ to: '/dashboard' });
	};

	return { handleOnChange, handleOnSubmit };
};

export { usePlans, useSwitchAnnuality, useLogin };
