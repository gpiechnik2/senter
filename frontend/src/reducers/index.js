import { combineReducers } from 'redux';

import authReducer from './auth';
import messageReducer from './message';

export default combineReducers({
  authReducer,
  messageReducer,
});
