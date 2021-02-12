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
import changeUserAgentReducer from './changeUserAgent';
import changeUserPasswordReducer from './changeUserPassword';
import getNewsReducer from './getNews';
import articlesReducer from './articles';
import keywordsReducer from './keywords';
import auditsReducer from './audits';
import searchReducer from './searchQuery';

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
  changeUserAgentReducer,
  changeUserPasswordReducer,
  getNewsReducer,
  articlesReducer,
  keywordsReducer,
  auditsReducer,
  searchReducer,
});
