import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { useAuth } from '@auth/hooks';
import { Spinner } from '@shared/ui/molecules';
import { useNavigate } from 'react-router-dom';

const Authenticated = lazy(() => import('@auth/ui/screens/authenticated-app'));
const Unauthenticated = lazy(
	() => import('@auth/ui/screens/unauthenticated-app')
);

function App() {
	const {
		state: { token }
	} = useAuth();

	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate('/plans');
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
