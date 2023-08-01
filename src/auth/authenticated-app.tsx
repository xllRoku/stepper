import { lazy, Suspense } from 'react';
import { Flex, Padding } from '../shared/custom.styled.components';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { Steps } from '../shared/ui/molecules';
import { Buttons } from '../shared/ui/components';
import { Down, HomeContainer, Logout, Position, Section, Up } from './ui/atoms';
import { useAuth } from './hooks';

const PlanScreen = lazy(() => import('../plans/plans'));
const AddonScreen = lazy(() => import('../addons/addons'));
const SummaryScreen = lazy(() => import('../summary/summary'));

const Layout = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	return (
		<HomeContainer>
			<Position>
				<Logout
					onClick={() => {
						logout();
						navigate('/');
					}}
				>
					log out
				</Logout>
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
					height='100%'
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
