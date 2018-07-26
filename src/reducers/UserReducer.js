import {
  GOT_USER,
} from '../actions/Constants';
/**
 * User Reducer
 */
const initialState = {
  loading: false,
  error: false,
  logged_in: false,
  errors: {},
  name: null,
  uuid: null,
  photo: null,
  message: null,
};
export default function UserReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GOT_USER:
      return {
        ...state,
        loading: false,
        error: false,
        logged_in: true,
        errors: {},
        name: action.data.name,
        uuid: action.data.uuid,
        photo: action.data.photo,
        message: ''
      };
    default:
      return state;
  }
}
