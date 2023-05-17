import { createContext, useState, useContext, useLayoutEffect } from 'react';
import * as auth from '../auth-provider';
import { User } from '../components';
import { useNavigate } from 'react-router-dom';
import { resetAllStates } from '../store';

const AuthContext = createContext<AuthContextType>({
	user: undefined,
	error: undefined,
	isLoading: false,
	register: () => Promise.resolve(),
	login: () => Promise.resolve(),
	logout: () => Promise.resolve()
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [response, setResponse] = useState({
		token: '',
		error: '',
		isLoading: false
	});
	const navigate = useNavigate();

	const startLoading = () => {
		setResponse({ ...response, isLoading: true });
	};

	const handleToken = (token: string, error: string, loading: boolean) => {
		setResponse({ ...response, token, error, isLoading: loading });
	};

	const handleError = (err: any, loading: boolean) => {
		setResponse({
			...response,
			error: err.response?.data.errorMessage,
			isLoading: loading
		});
	};

	useLayoutEffect(() => {
		(async () => {
			const token = await auth.getToken();
			handleToken(token, '', false);
		})();
	}, []);

	const register = (form: User) => {
		startLoading();
		return auth
			.register(form)
			.then(token => {
				handleToken(token, '', false);
				navigate('/plans');
			})
			.catch(err => handleError(err, false));
	};

	const login = (form: User) => {
		startLoading();
		return auth
			.login(form)
			.then(token => {
				handleToken(token, '', false);
				navigate('/plans');
			})
			.catch(err => handleError(err, false));
	};

	const logout = () => {
		auth.logout();
		setResponse({ token: '', isLoading: false, error: '' });
		navigate('/');
		resetAllStates();
	};

	const { error, token, isLoading } = response;

	const value = { register, login, logout, user: token, error, isLoading };

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error(`useAuth must be used within a AuthProvider`);
	}
	return context;
}

export type Token = {
	token: string;
};

export type Error = {
	error: string;
};

export type User = {
	email: string;
	password: string;
};

type AuthContextType = {
	user?: string;
	error?: string;
	isLoading?: boolean;
	register: (form: User) => Promise<void>;
	login: (form: User) => Promise<void>;
	logout: any;
};

export { AuthProvider, useAuth };
