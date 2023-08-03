import { useMemo } from 'react';
import { storeAddons } from '../context/addon.store';
import { AddonManagement } from '../addon.management';
import { annualityStore } from '../../annuality/context/annuality.store';
import { useQuery } from 'react-query';
import { AddonFromApi, AddonWithId } from '../addons.model';
import HttpService from '@shared/http';
import { apiURL } from '@shared/constans';

export const useAddonsManagement = () => {
	const dispatch = storeAddons();
	const addonManagement = useMemo(() => new AddonManagement(dispatch), []);
	const { addAddon, getAddons, upgradeAddons } = addonManagement;

	const store = {
		addons: getAddons()
	};

	return { addAddon, store, upgradeAddons };
};

export const useGetAddons = () => {
	const httpService = new HttpService(apiURL);
	const { annuality } = annualityStore();
	const { data, isLoading } = useQuery<AddonWithId[]>(
		['addons', annuality],
		() =>
			httpService.get<AddonFromApi[]>(`/addons/${annuality}`).then(res =>
				res.map(addon => ({
					id: addon._id,
					title: addon.title,
					price: addon.price,
					annuality: addon.annuality,
					content: addon.content
				}))
			)
	);

	return { data, isLoading };
};
