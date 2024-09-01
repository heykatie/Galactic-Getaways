import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';

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
				element: <h1>Welcome to Galactic Getaways!</h1>,
			},
			{
				path: '*',
				element: <h1>Page Not Found</h1>
			},
			{
				path: 'test',
				element: <h1>Hallo beautiful hooman</h1>
			}
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
