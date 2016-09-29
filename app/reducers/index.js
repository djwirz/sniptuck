import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import snippet from './snippet';
import fetchSnippets from './fetchSnippet'
import auth from './auth';

const rootReducer = combineReducers({
  snippet,
  fetchSnippets,
  auth,
  routing
});

export default rootReducer;
