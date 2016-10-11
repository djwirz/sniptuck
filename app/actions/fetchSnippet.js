import { apiRequest, apiRequestAuth } from '../utils/api-requests';

import Constants from '../utils/constants';

export function makeAsyncActionSet(actionName) {
  return {
    REQUEST: actionName + '_REQUEST',
    SUCCESS: actionName + '_SUCCESS',
    FAILURE: actionName + '_FAILURE'
  };
}


export const FETCHSNIPPET = makeAsyncActionSet('FETCHSNIPPET');
export function fetchSnippet(snippet) {
  return (dispatch, getState) => {

    const url = 'http://localhost:8080/snippet/id';
    const method = 'POST';
    const data = {
          "_id": snippet.id,
        }
    dispatch({type: FETCHSNIPPET.REQUEST});

    return apiRequest(url, method, data)
      .then(function (response) {
        dispatch({type: FETCHSNIPPET.SUCCESS, payload: response.data});
      })
      .catch(function (error) {
        dispatch({type: FETCHSNIPPET.FAILURE, payload: error.response.data});
      });

  };
};
