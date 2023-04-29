import { create } from 'zustand';
import { ANNUALITY } from './constans';

interface IPlan {
	id?: string;
	title?: string;
	price?: number;
	annuality?: string;
}

interface PlanStore {
	plan: IPlan | undefined;
	setPlan: (plan: IPlan) => void;
	changePrice: (price: number) => void;
	setAnnuality: (annuality: string) => void;
	removePlan: () => void;
}

const usePlanStore = create<PlanStore>(set => ({
	plan: undefined,
	setPlan: plan => set(() => ({ plan })),
	changePrice: price =>
		set(({ plan }) => ({ plan: { ...plan, price: price } })),
	setAnnuality: annuality =>
		set(({ plan }) => ({ plan: { ...plan, annuality: annuality } })),
	removePlan: () => set(() => ({ plan: undefined }))
}));

interface AnnualityStore {
	annuality: string;
	setAnnuality: (annuality: string) => void;
}

const useAnnualityStore = create<AnnualityStore>(set => ({
	annuality: ANNUALITY.MONTHLY,
	setAnnuality: annuality => set(state => ({ ...state, annuality }))
}));

export { usePlanStore, useAnnualityStore };
