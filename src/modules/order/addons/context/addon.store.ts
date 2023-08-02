import { create } from 'zustand';
import { AddonsActions, AddonsStore } from '../addons.model';
import { persist } from 'zustand/middleware';

export const storeAddons = create<AddonsStore & AddonsActions>()(
	persist(
		(set, get) => ({
			addons: [],
			get() {
				return get().addons;
			},
			add: addon => {
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
			update: addon => {
				if (addon) {
					if (Array.isArray(addon)) {
						set({
							addons: [...addon]
						});
					} else {
						set({
							addons: [addon]
						});
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
		}),
		{
			name: '__addons-store__',
			getStorage: () => localStorage
		}
	)
);
