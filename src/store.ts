import { create } from 'zustand';
import { ANNUALITY } from './constans';

type Plan = {
	id?: string;
	title?: string;
	annuality?: string;
	price?: number;
};

type Store = {
	plan: Plan | undefined;
	setPlan: (plan: Plan) => void;
	removePlan: () => void;
};

type Step = {
	step: number;
	setStep: (step: number) => void;
};

type AnnualityStore = {
	annuality: string;
	setAnnuality: (annuality: string) => void;
};

export type Addon = {
	id: string;
	title: string;
};

type IdStore = {
	selectedAddons: Addon[];
	addons: Addon[];
	addAddons: (addons: Addon[]) => void;
	setAddons: (addon: Addon | Addon[]) => void;
	removeAddon: (idToRemove: string) => void;
	removeAllAdons: () => void;
};

const useStore = create<Store>(set => ({
	plan: undefined,
	addon: [],
	setPlan: plan => set(() => ({ plan })),
	removePlan: () => set(() => ({ plan: undefined }))
}));

const useAnnualityStore = create<AnnualityStore>(set => ({
	annuality: ANNUALITY.MONTHLY,
	setAnnuality: annuality => set(state => ({ ...state, annuality }))
}));

const useSetStep = create<Step>(set => ({
	step: 1,
	setStep: step => set(state => ({ ...state, step }))
}));

const useAddons = create<IdStore>(set => ({
	selectedAddons: [],
	addons: [],

	addAddons: (addons: Addon[]) => {
		set(state => ({
			addons: [...state.addons, ...addons]
		}));
	},

	setAddons: (addon: Addon | Addon[], newAddons?: Addon | Addon[]) =>
		set(state => ({
			selectedAddons:
				Array.isArray(addon) && newAddons && Array.isArray(newAddons)
					? [
							...state.selectedAddons,
							...addon.filter(addon =>
								newAddons.some(
									selected => selected.title === addon.title
								)
							)
					  ]
					: Array.isArray(addon) && !newAddons
					? [...state.selectedAddons, ...addon]
					: !Array.isArray(addon)
					? [...state.selectedAddons, addon]
					: []
		})),

	removeAddon: (idToRemove: string) => {
		set(state => ({
			selectedAddons: state.selectedAddons.filter(
				addon => addon.id !== idToRemove
			)
		}));
	},
	removeAllAdons: () => set(() => ({ addons: [] }))
}));

export { useStore, useAnnualityStore, useSetStep, useAddons };
