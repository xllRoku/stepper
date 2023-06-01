import { create } from 'zustand';
import { ANNUALITY } from './constans';
import { AddonApi } from './api';

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
	id: string | undefined;
	title: string | undefined;
	price: number | undefined;
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

type AddonStoreState = {
	addons: Addon[];
	addonsFromApi: Addon[] | undefined;
	addAddons: (addons: Addon[] | undefined) => void;
	setMonthlyPlan: (newPlan: Addon | Addon[] | undefined) => void;
	removeAddon: (idToRemove: string | undefined) => void;
};

const useAddons = create<AddonStoreState>((set, get) => ({
	addons: [],
	addonsFromApi: [],
	addAddons: addons => {
		set(() => ({
			addonsFromApi: addons
		}));
	},
	setMonthlyPlan: newPlan => {
		const { addons } = get();
		if (newPlan) {
			const newAddons = Array.isArray(newPlan)
				? addons.map(selected => {
						const addon = newPlan.find(
							addon => addon.title === selected.title
						);
						return {
							...selected,
							id: addon?.id,
							price: addon?.price
						};
				  })
				: [...addons, newPlan];

			set(() => ({ addons: newAddons }));
		}
	},
	removeAddon: (idToRemove: string | undefined) => {
		set(state => ({
			addons: state.addons.filter(addon => addon.id !== idToRemove)
		}));
	}
}));

export { useStore, useAnnualityStore, useSetStep, useAddons };
