import { useMemo } from 'react';
import { storeAddons } from './store/addon.store';
import { AddonManagement } from './addon.management';

export const useAddonsManagement = () => {
	const dispatch = storeAddons();
	const addonManagement = useMemo(() => new AddonManagement(dispatch), []);

	const { addAddon, getAddons } = addonManagement;

	return { addAddon, getAddons };
};
