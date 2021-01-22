import { combineReducers } from 'redux';

import authReducer from './auth';
import messageReducer from './message';
import keywordReducer from './keywordPlanner';

export default combineReducers({
  authReducer,
  messageReducer,
  keywordReducer,
});
