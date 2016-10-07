import { apiRequest, apiRequestAuth } from '../utils/api-requests';

import Constants from '../utils/constants';

export function makeAsyncActionSet(actionName) {
  return {
    REQUEST: actionName + '_REQUEST',
    SUCCESS: actionName + '_SUCCESS',
    FAILURE: actionName + '_FAILURE'
  };
}

export const LOGIN = makeAsyncActionSet('LOGIN');
export function loginUser(code) {
  return (dispatch, getState) => {

    const url = 'https://github.com/login/oauth/access_token';
    const method = 'POST';
    const data = {
      'client_id': Constants.CLIENT_ID,
      'client_secret': Constants.CLIENT_SECRET,
      'code': code
    };

    dispatch({type: LOGIN.REQUEST});

    return apiRequest(url, method, data)
      .then(function (response) {
        dispatch({type: LOGIN.SUCCESS, payload: response.data});
      })
      .catch(function (error) {
        dispatch({type: LOGIN.FAILURE, payload: error.response.data});
      });

  };
};

export const LOGOUT = 'LOGOUT';
export function logout() {
  return { type: LOGOUT };
};
