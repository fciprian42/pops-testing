import { usersConstants } from '../constants/usersConstants';

let session = sessionStorage.getItem('auth');

const initialState = session ? JSON.parse(session) : {loggedIn: false, sessionToken: 0};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case usersConstants.LOGIN_SUCCESS:
      return {loggedIn: true, sessionToken: action.sessionToken};
    case usersConstants.LOGIN_FAILURE:
      return {...state};
    case usersConstants.LOGOUT:
      return {loggedIn: false, sessionToken: 0};
    default:
      return state;
  }
}

export default usersReducer;