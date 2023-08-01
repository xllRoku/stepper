import { useMemo } from 'react';
import { PlanManagement } from './plans.management';
import { storePlan } from './plan.store';
import { annualityStore } from '../annuality/annuality.store';
import { useQuery } from 'react-query';
import { PlanFromApi, PlanWithId } from './plans.models';
import { apiURL } from '../shared/constans';
import HttpService from '../shared/http';

export const usePlanManagement = () => {
	const dispatch = storePlan();
	const planManagement = useMemo(() => new PlanManagement(dispatch), []);

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
