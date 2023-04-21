import { Container } from './auth.components';
import { Router, Route, ReactLocation, Outlet } from '@tanstack/react-location';
import { Grid } from './functional.component';

const routes: Array<Route> = [
	{
		path: '/',
		element: () => import('./auth').then(module => <module.default />)
	},
	{
		path: '/dashboard',
		element: () => import('./home').then(module => <module.default />)
	}
];

const location = new ReactLocation();

function App() {
	return (
		<Router routes={routes} location={location}>
			<Container>
				<Grid gridPlaceItems='center' height='100%'>
					<Outlet />
				</Grid>
			</Container>
		</Router>
	);
}

export default App;
