import { useAuth } from './auth/auth-contenxt';
import AuthenticatedApp from './auth/authenticated-app';
import UnauthenticatedApp from './auth/unauthenticated-app';

function App() {
	const { user } = useAuth();

	return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
