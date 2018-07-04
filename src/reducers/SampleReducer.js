import { LOGGING, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/Constants';
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGING:
      return {
        ...state,
        logging: 1,
        loggedin: false,
        data: [],
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
        loggedin: true,
        data: action.data,
        error: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        logging: false,
        loggedin: false,
        data: [],
        error: true
      };
    default:
      return state;
  }
};
