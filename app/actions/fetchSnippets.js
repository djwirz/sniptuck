import axios from 'axios';

import * as types from '../constants/ActionTypes';

export const fetchSnippetsSuccess = snippets => {
  return {
    type: types.SNIPPETS_FETCH_SUCCESS,
    isFetching: true,
    payload: snippets
  }
};


// Called upon successfull api request, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
const requestFetchSnippets = () => {
  return {
    type: types.SNIPPETS_FETCH_REQUEST,
    isFetching: false
  }
};

// Called if error signing in, info sent to reducers.
// Reducer waiting for this action type is in reducers/classes_reducer.js
export const fetchSnippetsFailure = message => {
  return {
    type: types.SNIPPETS_FETCH_FAILURE,
    isFetching: false,
    payload: message
  }
};

// export const fetchSnippets() {
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

export const fetchSnippets = () => {
  return dispatch => {
    dispatch(requestFetchSnippets());
  return axios.get('http://localhost:8080/dist/api/find/snippet')
      .then(response => {
        //gotta manage that state, statelessness is next to godliness
        dispatch(fetchSnippetsSuccess(response.data));
        //choose where to redirect after adding that snippet yo
        //browserHistory.push('/');
      })
      .catch(response => {
        dispatch(fetchSnippetsFailure(response));
        //console.log('response: ', response)
        //potentially a snippet add failure page
      });
  };
}
