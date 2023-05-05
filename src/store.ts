import { create } from 'zustand';
import { ANNUALITY } from './constans';

type Plan = {
	id?: string;
	title?: string;
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
	title: string;
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
	addonsFromApi: Addon[];
	addAddons: (addons: Addon[]) => void;
	setMonthlyPlan: (newPlan: Addon | Addon[]) => void;
	removeAddon: (idToRemove: string | undefined) => void;
};

const useAddons = create<AddonStoreState>((set, get) => ({
	addons: [],
	addonsFromApi: [],
	addAddons: (addons: Addon[]) => {
		set(() => ({
			addonsFromApi: addons
		}));
	},
	setMonthlyPlan: newPlan => {
		const { addons } = get();

		const newAddons = Array.isArray(newPlan) ? [] : [...addons, newPlan];
		// ? newPlan.map(newAddon => {
		// 		const currentAddon = addons.find(
		// 			addon => addon.title === newAddon.title
		// 		);
		// 		return currentAddon
		// 			? { ...newAddon, id: currentAddon.id }
		// 			: newAddon;
		//   })
		// : [
		// 		...addons.map(addon =>
		// 			addon.title === newPlan.title
		// 				? { ...newPlan, id: addon.id }
		// 				: addon
		// 		)
		//   ];

		set(() => ({ addons: newAddons }));
	},
	removeAddon: (idToRemove: string | undefined) => {
		set(state => ({
			addons: state.addons.filter(addon => addon.id !== idToRemove)
		}));
	}
}));

export { useStore, useAnnualityStore, useSetStep, useAddons };
