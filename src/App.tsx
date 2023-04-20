import { Container } from './auth.components';
import { Router, Route, ReactLocation, Outlet } from '@tanstack/react-location';
import Home from './home';

const routes: Array<Route> = [
	{
		path: '/',
		element: () => import('./auth').then(module => <module.default />)
	},
	{
		path: '/dashboard',
		element: <Home />
	}
];

const location = new ReactLocation();

function App() {
	return (
		<Router routes={routes} location={location}>
			<Container>
				<Outlet />
			</Container>
		</Router>
	);
}

export default App;
