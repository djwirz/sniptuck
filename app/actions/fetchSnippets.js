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
function fetchSnippetsRequest(snippets) {
  return {
    type: types.SNIPPETS_FETCH_REQUEST,
    isFetching: false,
    payload: snippets
  }
};

// Called if error signing in, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
function fetchSnippetsFailure(message) {
  return {
    type: types.SNIPPETS_FETCH_FAILURE,
    isFetching: false,
    payload: message,
  }
};

export function fetchSnippets() {
  return function() {
    requestFetchSnippets();
      axios.get('http://localhost:8080/dist/api/find/snippet')
        .then(function(response){
          return fetchedSnippet(response.data);
        })
        .catch(function(response){
          return snippetFetchError(response);
        });
  };
};
