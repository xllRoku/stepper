import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ANNUALITY } from '../shared/constans';

const usePlanStore = create<PlanStore>()(
	persist(
		set => ({
			plan: undefined,
			setPlan: plan => set(() => ({ plan })),
			removePlan: () => set(() => ({ plan: undefined }))
		}),
		{
			name: 'plan-store',
			getStorage: () => localStorage
		}
	)
);

const useAnnualityStore = create<AnnualityStore>()(
	persist(
		set => ({
			annuality: ANNUALITY.MONTHLY,
			setAnnuality: annuality => set(state => ({ ...state, annuality }))
		}),
		{
			name: 'annuality-store',
			getStorage: () => localStorage
		}
	)
);

const useStepStore = create<StepStore>()(
	persist(
		set => ({
			step: 1,
			confirm: false,
			setStep: step => set(state => ({ ...state, step })),
			setConfirm: confirm => set(state => ({ ...state, confirm }))
		}),
		{
			name: 'step-store',
			getStorage: () => localStorage
		}
	)
);

const resetAllStates = () => {
	usePlanStore.setState(() => ({ plan: undefined, addon: [] }));
	useAnnualityStore.setState(() => ({
		annuality: ANNUALITY.MONTHLY
	}));
	useStepStore.setState(() => ({ step: 1, confirm: false }));
};

type Plan = {
	id?: string;
	title?: string;
	annuality?: string;
	price?: number;
};

type PlanStore = {
	plan: Plan | undefined;
	setPlan: (plan: Plan) => void;
	removePlan: () => void;
};

type StepStore = {
	step: number;
	confirm: boolean;
	setStep: (step: number) => void;
	setConfirm: (confirm: boolean) => void;
};

type AnnualityStore = {
	annuality: string;
	setAnnuality: (annuality: string) => void;
};

export { usePlanStore, useAnnualityStore, useStepStore, resetAllStates };
