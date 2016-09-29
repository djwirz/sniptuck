import {
  SIGNIN_SUCCESS, SIGNIN_REQUEST, SIGNIN_FAILURE
} from '../actions/signIn'

const initialState = {
  response: {},
  token: null,
  isFetching: false,
  failed: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        failed: false,
        response: {},
        token: null
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.payload.access_token
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        failed: true,
        response: action.payload
      };
    default:
      return state;
  }
};
