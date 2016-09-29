// See actions/addSnippet.js to see where actions are being dispatched

//Action Types
import {
  ADDSNIPPET_SUCCESS, ADDSNIPPET_REQUEST, ADDSNIPPET_FAILURE
} from '../actions/addSnippet'

const snippet = (state = {}, action) => {
  switch (action.type) {
    case ADDSNIPPET_REQUEST:
        console.log("ADDSNIPPET_REQUEST")
        return {
          ...state,
          isFetching: true,
        }
    case ADDSNIPPET_SUCCESS:
      console.log("ADDSNIPPET_SUCCESS");
      return {
        ...state,
        isFetching: false,
        newSnippet: action.payload,
      }
    case ADDSNIPPET_FAILURE:
      console.log("ADDSNIPPET_FAILURE");
      return {
        ...state,
        isFetching: false,
        newSnippet: null,
      }
    default:
      return state
  }
};

export default snippet;
