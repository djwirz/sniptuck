import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import snippet from './snippet';
import snippets from './fetchSnippets2'
import auth2 from './auth2';

const rootReducer = combineReducers({
  auth2,
  snippet,
  snippets,
  routing
});

export default rootReducer;
