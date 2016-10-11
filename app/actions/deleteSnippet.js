import { apiRequest, apiRequestAuth } from '../utils/api-requests';

import Constants from '../utils/constants';

export function makeAsyncActionSet(actionName) {
  return {
    REQUEST: actionName + '_REQUEST',
    SUCCESS: actionName + '_SUCCESS',
    FAILURE: actionName + '_FAILURE'
  };
}


export const DELETESNIPPET = makeAsyncActionSet('DELETESNIPPET');
export function deleteSnippet(id) {
  return (dispatch, getState) => {

    const url = 'http://localhost:8080/snippet';
    const method = 'DELETE';
    const data = {
      "_id": id,
    };

    dispatch({type: DELETESNIPPET.REQUEST});

    return apiRequest(url, method, data)
      .then(function (response) {
        dispatch({type: DELETESNIPPET.SUCCESS, payload: response.data});
      })
      .catch(function (error) {
        dispatch({type: DELETESNIPPET.FAILURE, payload: error.response.data});
      });

  };
};
