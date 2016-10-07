import { FETCHSNIPPETS } from '../actions/fetchSnippet2';

const initialState = {
  response: {},
  snippets: null,
  isFetching: false,
  failed: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHSNIPPETS.REQUEST:
      return {
        ...state,
        isFetching: true,
        failed: false,
        response: {},
        snippets: null
      };
    case FETCHSNIPPETS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        snippets: action.payload
      };
    case FETCHSNIPPETS.FAILURE:
      return {
        ...state,
        isFetching: false,
        failed: true,
        response: action.payload
      };
    default:
      return state;
  }
};
