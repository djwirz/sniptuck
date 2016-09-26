import axios from 'axios';

import { browserHistory } from 'react-router';

import * as types from '../constants/ActionTypes';

function requestaddSnippet(snippetInfo) {
  return {
    type: types.ADDSNIPPET_REQUEST,
    isFetching: true,
    payload: snippetInfo
  };
}

function addedSnippet(newSnippet) {
  return {
    type: types.ADDSNIPPET_SUCCESS,
    isFetching: false,
    payload: newSnippet
  };
}

function snippetAddError(message) {
  return {
    type: types.ADDSNIPPET_FAILURE,
    isFetching: false,
    payload: message,
  };
}

export function addSnippet(snippetInfo) {
  return function(dispatch) {
    dispatch(requestaddSnippet(snippetInfo));
  axios.post('http://localhost:8080/dist/api/add/snippet', { "snippet": snippetInfo.snippet })
      .then(function(response){
        //gotta manage that state, statelessness is next to godliness
        dispatch(addedSnippet(response.data));
        //choose where to redirect after adding that snippet yo
        browserHistory.push('/');
      })
      .catch(function(response){
        dispatch(snippetAddError(response));
        //console.log('response: ', response)
        //potentially a snippet add failure page
      });
  };
}
