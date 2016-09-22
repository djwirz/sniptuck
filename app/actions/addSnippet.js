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
    return axios.post('/api/add/snippet', { "snippet": snippetInfo.snippet })
      .then(function(response){
        dispatch(addedSnippet(response.data));
        browserHistory.push('/home');
      })
      .catch(function(response){
        dispatch(snippetAddError(response));
      });
  };
}
