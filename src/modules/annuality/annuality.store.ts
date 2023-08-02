import { create } from 'zustand';
import { ANNUALITY } from '../shared/constans';
import { persist } from 'zustand/middleware';

type Annuality = {
	annuality: string;
};

type AnnualityStore = {
	annuality: Annuality['annuality'];
};

type AnnualityActions = {
	update: (annuality: Annuality['annuality']) => void;
};

export const annualityStore = create<AnnualityStore & AnnualityActions>()(
	persist(
		set => ({
			annuality: ANNUALITY.MONTHLY,
			update: annuality => set(state => ({ ...state, annuality }))
		}),
		{
			name: 'annuality-store',
			getStorage: () => localStorage
		}
	)
);
