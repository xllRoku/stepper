import { useAuth } from './context/auth-contenxt';
import AuthenticatedApp from './authenticated-app';
import UnauthenticatedApp from './unauthenticated-app';

function App() {
	const { user } = useAuth();
<<<<<<< HEAD

	console.log(user);

=======
>>>>>>> b917e26929a0ab2b22cc15638888837adbc53aac
	return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
