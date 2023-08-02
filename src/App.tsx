import { lazy } from 'react';
import { Suspense } from 'react';
import { Spinner } from './shared/molecules';
import { useAuth } from '@auth/hooks';

const Authenticated = lazy(() => import('@auth/authenticated-app'));
const Unauthenticated = lazy(() => import('@auth/unauthenticated-app'));

function App() {
	const { getState } = useAuth();

	return (
		<Suspense
			fallback={
				<Spinner width='32px' borderColor='black' height='32px' />
			}
		>
			{getState().token ? <Authenticated /> : <Unauthenticated />}
		</Suspense>
	);
}

export default App;
