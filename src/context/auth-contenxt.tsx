import {
	createContext,
	useState,
	useCallback,
	useMemo,
	useContext
} from 'react';
import * as auth from '../auth-provider';

const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState();

	const register = useCallback(
		(form: any) => auth.register(form).then(user => setUser(user)),
		[setUser]
	);

	const value = useMemo(() => ({ user, register }), [register, user]);

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
