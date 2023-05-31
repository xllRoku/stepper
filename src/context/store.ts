import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ANNUALITY } from '../constans';

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

const useAddonStore = create<AddonStore>()(
	persist(
		set => ({
			addons: [],
			addonsFromApi: [],
			addAddons: addons => {
				set(() => ({
					addonsFromApi: addons
				}));
			},
			setMonthlyPlan: newPlan => {
				set(state => {
					const newAddons = Array.isArray(newPlan)
						? state.addons.map(selected => {
								const addon = newPlan.find(
									addon => addon.title === selected.title
								);
								return {
									...selected,
									id: addon?.id,
									price: addon?.price
								};
						  })
						: [...state.addons, newPlan];

					return {
						addons: newAddons,
						addonsFromApi: state.addonsFromApi
					};
				});
			},
			removeAddon: (idToRemove: string | undefined) => {
				set(state => ({
					addons: state.addons.filter(
						addon => addon?.id !== idToRemove
					)
				}));
			}
		}),
		{
			name: 'addons-store',
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
	useAddonStore.setState(() => ({ addons: [], addonsFromApi: [] }));
};

type Plan = {
	id?: string;
	title?: string;
	annuality?: string;
	price?: number;
};

type AddonStore = {
	addons: Addon[];
	addonsFromApi: Addon[];
	addAddons: (addons: Addon[] | undefined) => void;
	setMonthlyPlan: (newPlan: Addon | Addon[]) => void;
	removeAddon: (idToRemove: string | undefined) => void;
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

export type Addon = {
	id: string | undefined;
	title: string | undefined;
	price: number | undefined;
};

export {
	usePlanStore,
	useAnnualityStore,
	useStepStore,
	useAddonStore,
	resetAllStates
};
