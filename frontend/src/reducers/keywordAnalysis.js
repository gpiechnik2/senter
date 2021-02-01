import {
  REQUEST_KEYWORDANALYSIS_DATA,
  RECEIVE_KEYWORDANALYSIS_DATA,
  CLEAR_KEYWORDANALYSIS_DATA,
} from '../constants/actionTypes';

const initalState = {
  keywordAnalysisData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const keywordAnalysisReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_KEYWORDANALYSIS_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_KEYWORDANALYSIS_DATA:
      return {
        ...state,
        keywordAnalysisData: action.keywordAnalysisData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    case CLEAR_KEYWORDANALYSIS_DATA:
      return {
        ...state,
        keywordAnalysisData: null,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default keywordAnalysisReducer;
