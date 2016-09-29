import axios from 'axios';

import { browserHistory } from 'react-router';

import * as types from '../constants/ActionTypes';

const requestaddSnippet = snippetInfo => {
  return {
    type: types.ADDSNIPPET_REQUEST,
    isFetching: true,
    payload: snippetInfo
  };
}

const addedSnippet = newSnippet => {
  return {
    type: types.ADDSNIPPET_SUCCESS,
    isFetching: false,
    payload: newSnippet
  };
}

const snippetAddError = message => {
  return {
    type: types.ADDSNIPPET_FAILURE,
    isFetching: false,
    payload: message,
  };
}

export const addSnippet = snippetInfo => {
  return dispatch => {
    dispatch(requestaddSnippet(snippetInfo));
  axios.post('http://localhost:8080/dist/api/add/snippet', { "snippet": snippetInfo.snippet })
      .then( response => {
        //gotta manage that state, statelessness is next to godliness
        dispatch(addedSnippet(response.data));
        //choose where to redirect after adding that snippet yo
        browserHistory.push('/');
      })
      .catch( response => {
        dispatch(snippetAddError(response));
        //console.log('response: ', response)
        //potentially a snippet add failure page
      });
  };
}
