import { apiRequest, apiRequestAuth } from '../utils/api-requests';

import Constants from '../utils/constants';

export function makeAsyncActionSet(actionName) {
  return {
    REQUEST: actionName + '_REQUEST',
    SUCCESS: actionName + '_SUCCESS',
    FAILURE: actionName + '_FAILURE'
  };
}


export const UPDATESNIPPET = makeAsyncActionSet('UPDATESNIPPET');
export function updateSnippet(snippet) {
  return (dispatch, getState) => {

    const url = 'http://localhost:8080/snippet';
    const method = 'PUT';
    const data = {
      "_id": snippet._id,
      "title": snippet.title,
      "description": snippet.description,
      "tags": snippet.tags,
      "snippet": snippet.snippet
    };

    dispatch({type: UPDATESNIPPET.REQUEST});

    return apiRequest(url, method, data)
      .then(function (response) {
        dispatch({type: UPDATESNIPPET.SUCCESS, payload: response.data});
      })
      .catch(function (error) {
        dispatch({type: UPDATESNIPPET.FAILURE, payload: error.response.data});
      });

  };
};
