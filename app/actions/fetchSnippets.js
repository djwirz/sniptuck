import axios from 'axios';

import * as types from '../constants/ActionTypes';

export function fetchSnippetsSuccess(snippets) {
  return {
    type: types.SNIPPETS_FETCH_SUCCESS,
    isFetching: true,
    payload: snippets
  }
};


// Called upon successfull api request, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
function requestFetchSnippets() {
  return {
    type: types.SNIPPETS_FETCH_REQUEST,
    isFetching: false
  }
};

// Called if error signing in, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
export function fetchSnippetsFailure(message) {
  return {
    type: types.SNIPPETS_FETCH_FAILURE,
    isFetching: false,
    payload: message
  }
};

// export function fetchSnippets() {
//   const request = axios({
//     method: 'get',
//     url: `http://localhost:8080/dist/api/find/snippet`,
//     headers: []
//   });
//
//   return {
//     type: types.SNIPPETS_FETCH_REQUEST,
//     payload: request
//   };
// }

export function fetchSnippets() {
  return function(dispatch) {
    dispatch(requestFetchSnippets());
  return axios.get('http://localhost:8080/dist/api/find/snippet')
      .then(function(response){
        //gotta manage that state, statelessness is next to godliness
        dispatch(fetchSnippetsSuccess(response.data));
        //choose where to redirect after adding that snippet yo
        //browserHistory.push('/');
      })
      .catch(function(response){
        dispatch(fetchSnippetsFailure(response));
        //console.log('response: ', response)
        //potentially a snippet add failure page
      });
  };
}
