import { useMemo } from 'react';
import { PlanController } from '../plan.controller';
import { storePlan } from '../context/plan.store';
import { annualityStore } from '../../annuality/context/annuality.store';
import { useQuery } from 'react-query';
import { PlanFromApi, PlanWithId } from '../plans.models';
import HttpService from '@shared/http';
import { apiURL } from '@shared/constans';

export const usePlanManagement = () => {
	const dispatch = storePlan();
	const planManagement = useMemo(() => new PlanController(dispatch), []);

	const { addPlan, getPlan, upgradePlan } = planManagement;

	return { addPlan, getPlan, upgradePlan };
};

export const useGetPlans = () => {
	const httpService = new HttpService(apiURL);
	const { annuality } = annualityStore();
	const { data, isLoading } = useQuery<PlanWithId[]>(
		['plans', annuality],
		() =>
			httpService.get<PlanFromApi[]>(`/plans/${annuality}`).then(res =>
				res.map(plan => ({
					id: plan._id,
					title: plan.title,
					price: plan.price,
					annuality: plan.annuality,
					image: plan.image
				}))
			)
	);

	return { data, isLoading };
};
