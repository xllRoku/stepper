import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layout';

const PlanScreen = lazy(() => import('../../../order/plans/ui/screens/plans'));
const AddonScreen = lazy(
	() => import('../../../order/addons/ui/screen/addons')
);
const SummaryScreen = lazy(
	() => import('../../../order/summary/ui/screen/summary')
);

const AuthenticatedApp = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					path='/plans'
					element={
						<Suspense fallback={null}>
							<PlanScreen />
						</Suspense>
					}
				/>
				<Route
					path='/addons'
					element={
						<Suspense fallback={null}>
							<AddonScreen />
						</Suspense>
					}
				/>
				<Route
					path='/summary'
					element={
						<Suspense fallback={null}>
							<SummaryScreen />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
};

export default AuthenticatedApp;
