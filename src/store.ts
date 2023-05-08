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
	id: string;
	title: string;
};

type IdStore = {
	addons: Addon[];
	setMonthlyPlan: (addon: Addon[]) => void;
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
	addons: [],
	setMonthlyPlan: newPlan => {
		const { addons } = get();

		// Compara los títulos de los addons actuales con los nuevos
		const newAddons = newPlan.map(newAddon => {
			const currentAddon = addons.find(
				addon => addon.title === newAddon.title
			);
			return currentAddon
				? { ...newAddon, id: currentAddon.id } // Asigna el ID actual si el addon ya existe
				: newAddon; // Asigna un nuevo ID si el addon es nuevo
		});

		set(() => ({ addons: newAddons }));
	}
}));

export { useStore, useAnnualityStore, useSetStep, useAddons };
