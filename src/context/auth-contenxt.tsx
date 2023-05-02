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
	logout: any;
};

const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState();

	const register = (form: any) =>
		auth.register(form).then(user => setUser(user));

	const value = useMemo(() => ({ user, register }), [register, user]);

	return (
		<AuthContext.Provider value={{ register }}>
			{children}
		</AuthContext.Provider>
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
