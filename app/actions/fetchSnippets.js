import axios from 'axios';

import * as types from '../constants/ActionTypes';

function fetchSnippetsSuccess() {
  return {
    type: types.SNIPPETS_FETCH_SUCCESS,
    isFetching: true
  }
};


// Called upon successfull api request, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
export function fetchSnippetsRequest(snippets) {
  return {
    type: types.SNIPPETS_FETCH_REQUEST,
    isFetching: false,
    payload: snippets
  }
};

// Called if error signing in, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
export function fetchSnippetsFailure(message) {
  return {
    type: types.SNIPPETS_FETCH_FAILURE,
    isFetching: false,
    payload: message,
  }
};

export function fetchSnippets() {
  const request = axios({
    method: 'get',
    url: `http://localhost:8080/dist/api/find/snippet`,
    headers: []
  });

  return {
    type: types.SNIPPETS_FETCH_REQUEST,
    payload: request
  };
}
