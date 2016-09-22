import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import snippet from './snippet';

const rootReducer = combineReducers({
  snippet,
  routing
});

export default rootReducer;
