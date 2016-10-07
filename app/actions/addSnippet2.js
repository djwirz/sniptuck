import { apiRequest, apiRequestAuth } from '../utils/api-requests';

import Constants from '../utils/constants';

export function makeAsyncActionSet(actionName) {
  return {
    REQUEST: actionName + '_REQUEST',
    SUCCESS: actionName + '_SUCCESS',
    FAILURE: actionName + '_FAILURE'
  };
}


export const ADDSNIPPET = makeAsyncActionSet('ADDSNIPPET');
export function addSnippet(snippet) {
  return (dispatch, getState) => {

    const url = 'http://localhost:8080/dist/api/snippet';
    const method = 'POST';
    const data = {
      "title": snippet.title,
      "description": snippet.description,
      "tags": snippet.tags,
      "snippet": snippet.snippet
    };

    dispatch({type: ADDSNIPPET.REQUEST});

    return apiRequest(url, method, data)
      .then(function (response) {
        dispatch({type: ADDSNIPPET.SUCCESS, payload: response.data});
      })
      .catch(function (error) {
        dispatch({type: ADDSNIPPET.FAILURE, payload: error.response.data});
      });

  };
};
