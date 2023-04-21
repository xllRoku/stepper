import { Route, ReactLocation } from '@tanstack/react-location';

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

export { location, routes };
