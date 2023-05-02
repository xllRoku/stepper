import { create } from 'zustand';
import { ANNUALITY } from './constans';

type Plan = {
	id?: string;
	title?: string;
};

type PlanStore = {
	plan: Plan | undefined;
	setPlan: (plan: Plan) => void;
	changePrice: (price: number) => void;
	setAnnuality: (annuality: string) => void;
	removePlan: () => void;
};

const usePlanStore = create<PlanStore>(set => ({
	plan: undefined,
	setPlan: plan => set(() => ({ plan })),
	changePrice: price =>
		set(({ plan }) => ({ plan: { ...plan, price: price } })),
	setAnnuality: annuality =>
		set(({ plan }) => ({ plan: { ...plan, annuality: annuality } })),
	removePlan: () => set(() => ({ plan: undefined }))
}));

type AnnualityStore = {
	annuality: string;
	setAnnuality: (annuality: string) => void;
};

const useAnnualityStore = create<AnnualityStore>(set => ({
	annuality: ANNUALITY.MONTHLY,
	setAnnuality: annuality => set(state => ({ ...state, annuality }))
}));

type Step = {
	step: number;
	setStep: (step: number) => void;
};

const useSetStep = create<Step>(set => ({
	step: 1,
	setStep: step => set(state => ({ ...state, step }))
}));

export { usePlanStore, useAnnualityStore, useSetStep };
