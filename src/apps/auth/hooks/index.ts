import { useMemo } from 'react';
import { authStore } from '../context/auth.store';
import { AuthController } from '../auth.controller';

export const useAuth = () => {
	const dispatch = authStore();
	const authController = useMemo(() => new AuthController(dispatch), []);

	const { login, register, getState, logout } = authController;

	const state = {
		token: getState().token,
		error: {
			message: getState().error
		},
		loading: getState().loading
	};

	const auth = {
		login,
		register,
		logout
	};

	return { auth, state };
};
