import { createContext, useState, useContext } from 'react';
import * as auth from '../auth-provider';
import { User } from '../components';

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
};

const AuthContext = createContext<AuthContextType>({
	user: undefined,
	error: undefined,
	isLoading: false,
	register: () => Promise.resolve(),
	login: () => Promise.resolve()
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [response, setResponse] = useState({
		token: '',
		error: '',
		isLoading: false
	});

	const register = (form: User) => {
		setResponse({ ...response, isLoading: true });
		return auth
			.register(form)
			.then(token =>
				setResponse({ ...response, token, error: '', isLoading: false })
			)
			.catch(err =>
				setResponse({
					...response,
					error: err.response?.data.errorMessage,
					isLoading: false
				})
			);
	};

	const login = (form: User) => {
		setResponse({ ...response, isLoading: true });
		return auth
			.register(form)
			.then(token =>
				setResponse({ ...response, token, error: '', isLoading: false })
			)
			.catch(err =>
				setResponse({
					...response,
					error: err.response?.data.errorMessage,
					isLoading: false
				})
			);
	};

	const { error, token, isLoading } = response;

	const value = { register, login, user: token, error, isLoading };

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

export { AuthProvider, useAuth };
