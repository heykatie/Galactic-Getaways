import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
// import Navigation from './components/Navigation';

const Layout = () => {
  return (
		<main>
      {/* <Navigation /> */}
      <Outlet />
		</main>
  );
}

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
            element: <LoginFormPage/>
          }
				],
      },
      {
        path: '*',
        element: 'Page Not Found'
      }
		],
	},
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
