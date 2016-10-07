import { apiRequest, apiRequestAuth } from '../utils/api-requests';

import Constants from '../utils/constants';

export function makeAsyncActionSet(actionName) {
  return {
    REQUEST: actionName + '_REQUEST',
    SUCCESS: actionName + '_SUCCESS',
    FAILURE: actionName + '_FAILURE'
  };
}


export const FETCHSNIPPETS = makeAsyncActionSet('FETCHSNIPPETS');
export function fetchSnippets() {
  return (dispatch, getState) => {

    const url = 'http://localhost:8080/dist/api/snippet';
    const method = 'GET';

    dispatch({type: FETCHSNIPPETS.REQUEST});

    return apiRequestAuth(url, method)
      .then(function (response) {
        dispatch({type: FETCHSNIPPETS.SUCCESS, payload: response.data});
      })
      .catch(function (error) {
        dispatch({type: FETCHSNIPPETS.FAILURE, payload: error.response.data});
      });

  };
};
