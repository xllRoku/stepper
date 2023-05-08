import { colors } from './colors';
import { Buttons, Header, HomeContainer, Steps } from './components';
import { Flex, Padding } from './custom.styled.components';
import styled from 'styled-components';
import { useAuth } from './context/auth-contenxt';
import { Routes, Route, Outlet } from 'react-router-dom';
import PlanScreen from './screens/plans';
import AddonScreen from './screens/addons';
import Summary from './screens/summary';

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
				padding='1rem'
				paddingRight='7rem'
			>
				<Flex gap='7rem'>
					<Steps />
					<main style={{ width: '100%' }}>
						<Flex
							width='100%'
							height='100%'
							flexDirection='column'
							justifyContent='space-between'
						>
							<section>
								<Outlet />
							</section>
							<Buttons />
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
				<Route path='/plans' element={<PlanScreen />} />
				<Route path='/addons' element={<AddonScreen />} />
				<Route path='/summary' element={<Summary />} />
			</Route>
		</Routes>
	);
};

export default AuthenticatedApp;
