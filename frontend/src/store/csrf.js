// wrapping fetch with CSRF - set XSRF-TOKEN header on requests
import Cookies from 'js-cookie';

// extract XSRF-TOKEN cookie
export const csrfFetch = async (url, options = {}) => {
	// set options.method to 'GET' if there is no method
	// if (!options.headers) options.headers = {};
	options.headers = options.headers || {};

	// set options.headers to an empty object if there is no headers
	// if (!options.method) options.method = 'GET';
	options.method = options.method || 'GET';

	// if the options.method is not 'GET', then set the "Content-Type" header to "application/json", and set the "XSRF-TOKEN" header to the value of the "XSRF-TOKEN" cookie

	// if (options.method.toUpperCase() !== 'GET')
	// 	options.headers['XSRF-Token'] = {
	// 		'XSRF-TOKEN': Cookies,
	//   };

	if (options.method.toUpperCase() !== 'GET') {
		options.headers['Content-Type'] =
			options.headers['Content-Type'] || 'application/json';

		options.headers['XSRF-Token'] = Cookies.get('XSRF-Token');
	}

	// call the default window's fetch with the url and the options passed in
	const res = await window.fetch(url, options);

	// if the response status code is 400 or above, then throw an error with the error being the response

	// if the response status code is under 400, then return the response to the next promise chain

	if (res >= 400) {
		throw res;
	} else {
		return res;
	}
};

// call this to get the "XSRF-TOKEN" cookie, should only be used in development
export function restoreCSRF() {
  return csrfFetch('/api/csrf/restore');
}
