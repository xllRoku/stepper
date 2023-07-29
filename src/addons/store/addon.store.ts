import { create } from 'zustand';
import { AddonsActions, AddonsStore } from '../addon.model';

export const storeAddons = create<AddonsStore & AddonsActions>((set, get) => ({
	addons: [],
	get() {
		return get().addons;
	},
	update: addon => {
		if (addon) {
			if (Array.isArray(addon)) {
				set(state => ({
					addons: [...state.addons, ...addon]
				}));
			} else {
				set(state => ({
					addons: [...state.addons, addon]
				}));
			}
		}
	},
	delete: addon => {
		if (addon) {
			set({
				addons: Array.isArray(addon) ? [...addon] : [addon]
			});
		}
	}
}));
