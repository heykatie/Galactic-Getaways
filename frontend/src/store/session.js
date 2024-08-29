import {csrfFetch} from './csrf';

// all the actions for session user's info & session user's Redux reducer
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

// action creator to set user in session slice of state to action creator's input param
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}

// action creator to cause reducer to remove session user
const removeUser = () => {
  return {
    type: REMOVE_USER,
  }
}

// thunk action creator to call backend API to log in, then set session user from response
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const res = await csrfFetch('/api/session', {
		method: 'POST',
		body: JSON.stringify({
			credential,
			password,
		}),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(setUser(data.user));
  }
  return res;
}

export const removeUserThunk = () => async (dispatch) => {

}

// {
// 	user: {
// 		id, email, username, firstName, lastName;
// 	}
// }

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.payload };
    }
    case REMOVE_USER: {
      return { ...state, user: null };
    }
    default:
      return state;
  }
}

export default sessionReducer;