import { storeAddons } from '../../addons/context/addon.store';
import { annualityStore } from '../../annuality/context/annuality.store';
import { storePlan } from '../../plans/context/plan.store';
import { useStepStore } from '@shared/store/store';
import { useQuery } from 'react-query';
import { apiURL } from '@shared/constans';
import HttpService from '@shared/http';
import { STEP, useNavigateTo } from '@shared/hooks';

export const useGetTotal = () => {
	const httpService = new HttpService(apiURL);
	const { plan } = storePlan();
	const { addons } = storeAddons();
	const { annuality } = annualityStore();
	const { setStep } = useStepStore();
	const { navigate } = useNavigateTo();

	const addonsPrices = addons.map((addon) => addon.price);
	const prices = [plan?.price, addonsPrices];

	const { data: total } = useQuery(['total', prices], () =>
		httpService.post<number>('/order/total', prices)
	);

	const move = () => {
		setStep(STEP.ONE);
		navigate('/plans');
	};

	return { total, move, annuality, addons, plan };
};
