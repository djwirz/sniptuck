import axios from 'axios';

import * as types from '../constants/ActionTypes';
import secrets from '../../config';

function requestSignIn(snippetInfo) {
  return {
    type: types.SIGNIN_REQUEST,
    isFetching: true,
    payload: snippetInfo
  };
}

function signInSuccess(newSnippet) {
  return {
    type: types.SIGNIN_SUCCESS,
    isFetching: false,
    payload: newSnippet
  };
}

function signInFailure(message) {
  return {
    type: types.SIGNIN_FAILURE,
    isFetching: false,
    payload: message,
  };
}

export function signInUser(code) {
  return (dispatch, getState) => {
    dispatch(requestSignIn(code));
    return axios.post('https://github.com/login/oauth/access_token', {
      'client_id': secrets.client_id,
      'client_secret': secrets.client_secret,
      'code': code
    })
    .then(function(response){
      //gotta manage that state, statelessness is next to godliness
      dispatch(signInSuccess(response.data));
      //choose where to redirect after adding that snippet yo
      //browserHistory.push('/');
    })
    .catch(function(response){
      dispatch(signInFailure(response));
      //console.log('response: ', response)
      //potentially a snippet add failure page
    });

  };
};
