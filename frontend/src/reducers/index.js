import { combineReducers } from 'redux';

import authReducer from './auth';
import messageReducer from './message';
import keywordReducer from './keywordPlanner';
import contentCheckReducer from './contentCheck';
import contentAnalyseReducer from './contentAnalyse';
import websiteInfoReducer from './websiteInfo';
import auditCheckReducer from './auditCheck';
import createAuditReducer from './createAudit';
import websiteAnalysisReducer from './websiteAnalysis';
import keywordAnalysisReducer from './keywordAnalysis';
import changeContactEmailReducer from './changeContactEmail';
import changeUserEmailReducer from './changeUserEmail';

export default combineReducers({
  authReducer,
  messageReducer,
  keywordReducer,
  contentCheckReducer,
  contentAnalyseReducer,
  websiteInfoReducer,
  auditCheckReducer,
  createAuditReducer,
  websiteAnalysisReducer,
  keywordAnalysisReducer,
  changeContactEmailReducer,
  changeUserEmailReducer,
});
