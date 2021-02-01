import {
  REQUEST_WEBSITEANALYSIS_DATA,
  RECEIVE_WEBSITEANALYSIS_DATA,
  CLEAR_WEBSITEANALYSIS_DATA,
} from '../constants/actionTypes';

const initalState = {
  websiteAnalysisData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const websiteAnalysisReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_WEBSITEANALYSIS_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_WEBSITEANALYSIS_DATA:
      return {
        ...state,
        websiteAnalysisData: action.websiteAnalysisData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    case CLEAR_WEBSITEANALYSIS_DATA:
      return {
        ...state,
        websiteAnalysisData: null,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default websiteAnalysisReducer;
