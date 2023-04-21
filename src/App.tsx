import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Auth = lazy(() =>
	import('./authentication').then(module => ({ default: module.default }))
);
const SingUp = lazy(() =>
	import('./authentication').then(module => ({ default: module.SingUp }))
);
const Home = lazy(() => import('./home'));
const Plans = lazy(() => import('./plan'));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Auth />}>
					<Route index element={<SingUp />} />
				</Route>
				<Route path='/payment/' element={<Home />}>
					<Route index path='plan' element={<Plans />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
