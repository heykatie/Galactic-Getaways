import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// redux provider
import { Provider } from 'react-redux';
import configureStore from './store/index';

import { restoreCSRF, csrfFetch } from './store/csrf';

// session actions & reducer
import * as sessionActions from './store/session';

// setup store
const store = configureStore();
if (process.env.NODE_ENV !== 'production') window.store = store;

// call the restoreCSRF function when in development & attach the custom csrfFetch function onto the window
if (import.meta.env.MODE !== 'production') {
	restoreCSRF();

	window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
