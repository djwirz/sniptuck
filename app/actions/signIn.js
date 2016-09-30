import axios from 'axios';

import * as types from '../constants/ActionTypes';
import secrets from '../../config';

const requestSignIn = code => {
  return {
    type: types.SIGNIN_REQUEST,
    isFetching: true,
    payload: code
  };
}

const signInSuccess = code => {
  return {
    type: types.SIGNIN_SUCCESS,
    isFetching: false,
    payload: code
  };
}

const signInFailure = message => {
  return {
    type: types.SIGNIN_FAILURE,
    isFetching: false,
    payload: message,
  };
}

export const signInUser = code => {
  return (dispatch, getState) => {
    dispatch(requestSignIn(code));
    return axios.post('https://github.com/login/oauth/access_token', {
      'client_id': secrets.client_id,
      'client_secret': secrets.client_secret,
      'code': code
    })
    .then( response => {
      dispatch(signInSuccess(response.data));
    })
    .catch( response => {
      dispatch(signInFailure(response));
    });

  };
};

export const SIGNOUT = 'SIGNOUT';
export const signout = () => {
  return { type: SIGNOUT };
};
