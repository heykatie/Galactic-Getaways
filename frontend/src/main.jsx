import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// redux provider
import { Provider } from 'react-redux';
import configureStore from './store';
import { Modal, ModalProvider } from './context/Modal';

// session actions & reducer
import * as sessionActions from './store/session';

import { restoreCSRF, csrfFetch } from './store/csrf';

// setup store
const store = configureStore();

// call the restoreCSRF function when in development & attach the custom csrfFetch function onto the window
if (import.meta.env.MODE !== 'production') {
	restoreCSRF();

	window.csrfFetch = csrfFetch;
	window.store = store;
	window.sessionActions = sessionActions;
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ModalProvider>
			<Provider store={store}>
				<App />
				<Modal />
			</Provider>
		</ModalProvider>
	</React.StrictMode>
);
