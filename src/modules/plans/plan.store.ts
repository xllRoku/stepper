import { create } from 'zustand';
import { PlanActions, PlanStore } from './plans.models';
import { persist } from 'zustand/middleware';

export const storePlan = create<PlanStore & PlanActions>()(
	persist(
		(set, get) => ({
			plan: undefined,
			get() {
				return get().plan;
			},
			update: plan => set(() => ({ plan })),
			delete: () => set(() => ({ plan: undefined }))
		}),
		{
			name: '__plan-store__',
			getStorage: () => localStorage
		}
	)
);
