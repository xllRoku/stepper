import { createContext, useState, useContext } from 'react';
import * as auth from '../auth-provider';

type UserRegisterDto = {
	email: string;
	password: string;
};

export type UserToken = {
	token: string;
};

type Auth = {
	token: string | undefined;
	register: ({
		email,
		password
	}: UserRegisterDto) => Promise<UserToken | void>;
};

const AuthContext = createContext<Auth>({
	token: undefined,
	register: () => Promise.resolve({ token: '' })
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState<UserToken | undefined>();

	const register = (form: UserRegisterDto): Promise<UserToken> =>
		auth.register(form).then(token => setToken(token));

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
