import {
  SNIPPETS_FETCH_SUCCESS, SNIPPETS_FETCH_REQUEST, SNIPPETS_FETCH_FAILURE
} from '../actions/fetchSnippets'

const fetchSnippets = (state = {}, action) => {
  switch (action.type) {
    case SNIPPETS_FETCH_REQUEST:
        console.log("SNIPPETS_FETCH_REQUEST")
        return {
          ...state,
          isFetching: true,
        }
    case SNIPPETS_FETCH_SUCCESS:
      console.log("SNIPPETS_FETCH_SUCCESS");
      return {
        ...state,
        isFetching: false,
        newSnippet: action.payload,
      }
    case SNIPPETS_FETCH_FAILURE:
      console.log("SNIPPETS_FETCH_FAILURE");
      return {
        ...state,
        isFetching: false,
        newSnippet: null,
      }
    default:
      return state
  }
};

export default fetchSnippets;
