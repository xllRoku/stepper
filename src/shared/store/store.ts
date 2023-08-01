import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
	useStepStore.setState(() => ({ step: 1, confirm: false }));
};

type StepStore = {
	step: number;
	confirm: boolean;
	setStep: (step: number) => void;
	setConfirm: (confirm: boolean) => void;
};

export { useStepStore, resetAllStates };
