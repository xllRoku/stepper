import { useMemo } from 'react';
import { authStore } from './auth.store';
import { AuthController } from './auth';

export const useAuth = () => {
	const dispatch = authStore();
	const authController = useMemo(() => new AuthController(dispatch), []);

	const { login, register, getState, logout } = authController;

	return { login, register, getState, logout };
};
