import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restoreUser } from './store/session';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navbar from './components/Navigation';

const Layout = () => {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => () => {
    dispatch(restoreUser()).then(() => {
      setIsLoaded(true);
    })}, [dispatch]
	);

	return (
		<main>
			<Navbar />
			{isLoaded && <Outlet />}
		</main>
	);
};

const routes = [
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				children: [
					{
						index: true,
						element: <h1> Welcome to BnB </h1>,
					},
					{
						path: 'login',
						element: <LoginFormPage />,
					},
					{
						path: 'signup',
						element: <SignupFormPage />,
					},
					// {
					//   path: 'logout',
					//   element: <
					// }
				],
			},
			{
				path: '*',
				element: 'Page Not Found',
			},
		],
	},
];

const router = createBrowserRouter(routes);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
