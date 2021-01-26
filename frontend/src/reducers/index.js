import { combineReducers } from 'redux';

import authReducer from './auth';
import messageReducer from './message';
import keywordReducer from './keywordPlanner';
import contentCheckReducer from './contentCheck';
import contentAnalyseReducer from './contentAnalyse';
import websiteInfoReducer from './websiteInfo';

export default combineReducers({
  authReducer,
  messageReducer,
  keywordReducer,
  contentCheckReducer,
  contentAnalyseReducer,
  websiteInfoReducer,
});
