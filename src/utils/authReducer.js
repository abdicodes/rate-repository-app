import AuthStorage from './authStorage';

const authStorage = new AuthStorage();

// action types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// initial state
const initialState = {
  accessToken: null,
};

// reducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // get the authentication token from the action payload
      // eslint-disable-next-line no-case-declarations
      const { accessToken } = action.payload;
      // store the token in the authentication storage
      authStorage.storeToken(accessToken);

      // return the updated state with the new token
      return {
        ...state,
        accessToken: accessToken,
      };
    case LOGOUT_SUCCESS:
      // clear the token from the authentication storage
      AuthStorage.clearToken();
      // return the updated state with null token
      return {
        ...state,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
