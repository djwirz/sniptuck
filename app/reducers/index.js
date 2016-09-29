import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import snippet from './snippet';
import auth from './auth';

const rootReducer = combineReducers({
  snippet,
  auth,
  routing
});

export default rootReducer;
