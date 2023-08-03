import { AuthActions, AuthStore } from '@auth/auth.model';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const authStore = create<AuthStore & AuthActions>()(
	persist(
		(set, get) => ({
			token: undefined,
			error: undefined,
			loading: false,
			get() {
				return get();
			},
			update: data => set(() => data)
		}),
		{
			name: '__auth__',
			getStorage: () => localStorage,
			partialize: state => ({ token: state.token })
		}
	)
);
