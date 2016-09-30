import * as types from '../constants/ActionTypes';

const requestSignout = () => {
  return {
    type: types.SIGNOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

const receiveSignout = () => {
  return {
    type: types.SIGNOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export const signoutUser = () => {
  return dispatch => {
    dispatch(requestSignout())
    localStorage.removeItem('id_token')
    dispatch(receiveSignout())
  }
}
