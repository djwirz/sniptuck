// See actions/addSnippet.js to see where actions are being dispatched

//Action Types
import {
  ADDSNIPPET_SUCCESS, ADDSNIPPET_REQUEST, ADDSNIPPET_FAILURE
} from '../actions/addSnippet'

const snippet = (state = {}, action) => {
  switch (action.type) {
    case ADDSNIPPET_REQUEST:
        console.log("ADDSNIPPET_REQUEST")
        return Object.assign({}, state, {
            isFetching: true,
        })
    case ADDSNIPPET_SUCCESS:
      console.log("ADDSNIPPET_SUCCESS");
      return Object.assign({}, state, {
        isFetching: false,
        newSnippet: action.payload,
      })
    case ADDSNIPPET_FAILURE:
      console.log("ADDSNIPPET_FAILURE");
      return Object.assign({}, state, {
        isFetching: false,
        newSnippet: null,
      })
    default:
      return state
  }
};

export default snippet;
