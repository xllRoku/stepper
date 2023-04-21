import { Container } from './auth.components';
import { Router, Outlet } from '@tanstack/react-location';
import { Grid } from './functional.component';
import { routes, location } from './routes';

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
