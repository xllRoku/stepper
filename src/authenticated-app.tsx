import { lazy, Suspense } from 'react';
import { colors } from './colors';
import { Buttons, HomeContainer, Steps } from './components';
import { Flex, Padding } from './custom.styled.components';
import styled from 'styled-components';
import { useAuth } from './context/auth-contenxt';
import { Routes, Route, Outlet } from 'react-router-dom';
import Spinner from './spinner';

const PlanScreen = lazy(() => import('./screens/plans'));
const AddonScreen = lazy(() => import('./screens/addons'));
const SummaryScreen = lazy(() => import('./screens/summary'));

const Logout = styled.button`
	width: 4rem;
	height: 2rem;
	position: relative;
	text-transform: capitalize;
	background: ${colors.MarineBlue};
	border: none;
	color: white;
	cursor: pointer;
	font-weight: bold;
	border-radius: 0.5rem;
	z-index: 1;
`;

const Position = styled.div`
	position: absolute;
	right: 30px;
	top: 10px;
`;

const Section = styled.section`
	background: white;
	border-radius: 0.5rem;
`;

const Up = styled.div`
	max-width: 340px;
	background: 'white';
	border-radius: '.5rem';
	position: relative;
	top: -50px;
	margin-inline: auto;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
		0 4px 6px -4px rgb(0 0 0 / 0.1);

	@media (min-width: 1200px) {
		max-width: 100%;
		width: 100%;
		position: initial;
		top: 0;
		box-shadow: none;
	}
`;

const Down = styled.div`
	background: white;
	@media (min-width: 1200px) {
		background: none;
	}
`;

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
	return (
		<Suspense fallback={<Spinner />}>
			<AppRoutes />
		</Suspense>
	);
};

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/plans' element={<PlanScreen />} />
				<Route path='/addons' element={<AddonScreen />} />
				<Route path='/summary' element={<SummaryScreen />} />
			</Route>
		</Routes>
	);
};

export default AuthenticatedApp;
