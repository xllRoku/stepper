import { Container, ContainerForm, ObvImage, ObvImageForm } from './components';
import { Router, Route, ReactLocation, Outlet } from '@tanstack/react-location';

const Home = () => {
	return <div>hello world</div>;
};
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
