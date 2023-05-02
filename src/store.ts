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

type IdStore = {
	addons: string[];
	setAddons: (newId: string[]) => void;
	removeAddon: (idToRemove: string) => void;
};

const useAddons = create<IdStore>(set => ({
	addons: [],
	setAddons: newId => set({ addons: newId }),
	removeAddon: (idToRemove: string) => {
		set(state => ({
			addons: state.addons.filter(id => id !== idToRemove)
		}));
	}
}));

export { useStore, useAnnualityStore, useSetStep, useAddons };
