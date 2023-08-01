import { useMemo } from 'react';
import { storeAddons } from './addon.store';
import { AddonManagement } from './addon.management';
import { annualityStore } from '../annuality/annuality.store';
import { useQuery } from 'react-query';
import { AddonFromApi, AddonWithId } from './addons.model';
import { apiURL } from '../shared/constans';
import HttpService from '../shared/http';

export const useAddonsManagement = () => {
	const dispatch = storeAddons();
	const addonManagement = useMemo(() => new AddonManagement(dispatch), []);
	const { addAddon, getAddons, upgradeAddons } = addonManagement;

	return { addAddon, getAddons, upgradeAddons };
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
