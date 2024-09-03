import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';
import Spots from './components/Spots';
import SpotDetails from './components/SpotDetails';
import CreateSpot from './components/SpotForms/CreateSpot.jsx';
import EditSpot from './components/SpotForms/EditSpot.jsx';

function Layout() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => {
			setIsLoaded(true);
		});
	}, [dispatch]);

	return (
		<main>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && <Outlet />}
		</main>
	);
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Spots />,
			},
			{
				path: '/spots',
				element: <Spots />,
			},
			{
				path: '/spots/:id',
				element: <SpotDetails />,
			},
			{
				path: '/spots/new',
				element: <CreateSpot />,
			},
			{
				path: '/spots/:id/edit',
				element: <EditSpot />,
			},
			{
				path: 'test',
				element: <h1>Hallo beautiful hooman</h1>,
			},
			{
				path: '*',
				element: <h1>Page Not Found</h1>,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
