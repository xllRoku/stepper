import { create } from 'zustand';
import { IPlan } from './home';

type PlanStore = {
	plan: IPlan | undefined;
	setPlan: (plan: IPlan) => void;
	changePrice: (price: number) => void;
	setAnnuality: (annuality: string) => void;
	removePlan: () => void;
};

const usePlan = create<PlanStore>(set => ({
	plan: undefined,
	setPlan: (plan: IPlan) => set(() => ({ plan })),
	changePrice: (price: number) =>
		set(state => ({ plan: { ...state.plan, price } })),
	setAnnuality: (annuality: string) =>
		set(state => ({ plan: { ...state.plan, annuality } })),
	removePlan: () => set(() => ({ plan: undefined }))
}));
