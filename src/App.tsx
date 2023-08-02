import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { useAuth } from '@auth/hooks';
import { Spinner } from '@shared/ui/molecules';
import { useLocation } from 'react-router-dom';
import { useNavigateTo } from '@shared/hooks';

const Authenticated = lazy(() => import('@auth/ui/screens/authenticated-app'));
const Unauthenticated = lazy(
	() => import('@auth/ui/screens/unauthenticated-app')
);

function App() {
	const {
		state: { token }
	} = useAuth();

	const { navigate } = useNavigateTo();
	const location = useLocation();

	useEffect(() => {
		if (token) {
			navigate('/plans');
		} else {
			if (location.pathname !== '/' && !token) {
				navigate('/');
			}
		}
	}, [token]);

	return (
		<Suspense
			fallback={
				<Spinner width='32px' borderColor='black' height='32px' />
			}
		>
			{token ? <Authenticated /> : <Unauthenticated />}
		</Suspense>
	);
}

export default App;
