import { lazy, Suspense } from 'react';
import { Flex, Padding } from './custom.styled.components';
import { useAuth } from './context/auth-contenxt';
import { Routes, Route, Outlet } from 'react-router-dom';
import Spinner from './spinner';
import { Down, HomeContainer, Logout, Position, Section, Up } from './iu/atoms';
import { Buttons } from './iu/components';
import { Steps } from './iu/molecules';

const PlanScreen = lazy(() => import('./screens/plans'));
const AddonScreen = lazy(() => import('./screens/addons'));
const SummaryScreen = lazy(() => import('./screens/summary'));

const Layout = () => {
	const { logout } = useAuth();
	return (
		<HomeContainer>
			<Position>
				<Logout onClick={logout}>log out</Logout>
			</Position>
			<Padding
				width='100%'
				height='100%'
				media={{
					'@media (min-width: 1200px)': {
						padding: '1rem',
						paddingRight: '7rem'
					}
				}}
			>
				<Flex
					flexDirection='column'
					alignItems='center'
					media={{
						'@media (min-width: 1200px)': {
							flexDirection: 'row',
							gap: '7rem',
							alignItems: 'normal'
						}
					}}
				>
					<Steps />
					<main style={{ width: '100%' }}>
						<Flex
							width='100%'
							height='100%'
							flexDirection='column'
							media={{
								'@media (min-width: 1200px)': {
									justifyContent: 'space-between'
								}
							}}
						>
							<Up>
								<Section>
									<Padding
										width='100%'
										height='100%'
										padding='1rem'
										media={{
											'@media (min-width: 1200px)': {
												padding: 0
											}
										}}
									>
										<Outlet />
									</Padding>
								</Section>
							</Up>
							<Down>
								<Padding
									width='100%'
									height='100%'
									padding='1rem'
									media={{
										'@media (min-width: 1200px)': {
											padding: 0
										}
									}}
								>
									<Buttons />
								</Padding>
							</Down>
						</Flex>
					</main>
				</Flex>
			</Padding>
		</HomeContainer>
	);
};

const AuthenticatedApp = () => {
	return <AppRoutes />;
};

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					path='/plans'
					element={
						<Suspense
							fallback={
								<Spinner
									borderColor='black'
									height='3rem'
									width='3rem'
								/>
							}
						>
							<PlanScreen />
						</Suspense>
					}
				/>
				<Route
					path='/addons'
					element={
						<Suspense
							fallback={
								<Spinner
									borderColor='black'
									height='3rem'
									width='3rem'
								/>
							}
						>
							<AddonScreen />
						</Suspense>
					}
				/>
				<Route
					path='/summary'
					element={
						<Suspense
							fallback={
								<Spinner
									borderColor='black'
									height='3rem'
									width='3rem'
								/>
							}
						>
							<SummaryScreen />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
};

export default AuthenticatedApp;
