import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addons from './payment/addons/addon';
import Home from './payment/home/home';
import Plans from './payment/plan/plan';

const Auth = lazy(() =>
	import('./auth/authentication').then(module => ({
		default: module.default
	}))
);
const SingUp = lazy(() =>
	import('./auth/authentication').then(module => ({ default: module.SingUp }))
);

// caught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
// const Home = lazy(() =>
// 	import('./payment/home/home').then(module => ({ default: module.default }))
// );
// const Plans = lazy(() =>
// 	import('./payment/plan/plan').then(module => ({ default: module.default }))
// );

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Auth />}>
					<Route index element={<SingUp />} />
				</Route>
				<Route path='/payment/' element={<Home />}>
					<Route index path='plan' element={<Plans />} />
					<Route path='addon' element={<Addons />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
