import axios from 'axios';

import * as types from '../constants/ActionTypes';
import secrets from '../../config';

const requestSignIn = snippetInfo => {
  return {
    type: types.SIGNIN_REQUEST,
    isFetching: true,
    payload: snippetInfo
  };
}

const signInSuccess = newSnippet => {
  return {
    type: types.SIGNIN_SUCCESS,
    isFetching: false,
    payload: newSnippet
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
      //gotta manage that state, statelessness is next to godliness
      dispatch(signInSuccess(response.data));
      //choose where to redirect after adding that snippet yo
      //browserHistory.push('/');
    })
    .catch( response => {
      dispatch(signInFailure(response));
      //console.log('response: ', response)
      //potentially a snippet add failure page
    });

  };
};

export const SIGNOUT = 'SIGNOUT';
export const signout = () => {
  return { type: SIGNOUT };
};
