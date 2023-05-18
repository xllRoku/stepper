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
	text-transform: capitalize;
	background: ${colors.MarineBlue};
	border: none;
	color: white;
	cursor: pointer;
	font-weight: bold;
	border-radius: 0.5rem;
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
	width: 90%;
	height: 100%;
	background: 'white';
	border-radius: '.5rem';
	position: relative;
	top: -50px;

	@media (min-width: 1200px) {
		width: 100%;
		position: initial;
		top: 0;
	}
`;

const Down = styled.div`
	width: 100%;
	position: 'absolute';
	bottom: -60px;
	background: white;

	@media (min-widht: 1200px) {
		position: initial;
		bottom: 0;
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
					<Up>
						<main style={{ width: '100%' }}>
							<Flex
								width='100%'
								height='100%'
								flexDirection='column'
								justifyContent='space-between'
							>
								<Section>
									<Padding
										width='100%'
										height='100%'
										padding='1rem'
									>
										<Outlet />
									</Padding>
								</Section>
							</Flex>
						</main>
					</Up>
				</Flex>
			</Padding>
			<Down
				style={{ width: '100%', position: 'absolute', bottom: '-60px' }}
			>
				<Buttons />
			</Down>
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
