import { useAuth } from './context/auth-contenxt';
import AuthenticatedApp from './authenticated-app';
import UnauthenticatedApp from './unauthenticated-app';

function App() {
	const { user } = useAuth();
	return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
