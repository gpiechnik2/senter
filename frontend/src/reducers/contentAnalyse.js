import {
  REQUEST_ANALYSE_DATA,
  RECEIVE_ANALYSE_DATA,
  CLEAR_ANALYSE_DATA,
} from '../constants/actionTypes';

const initalState = {
  analyseData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const contentAnalyseReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_ANALYSE_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_ANALYSE_DATA:
      return {
        ...state,
        analyseData: action.analyseData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    case CLEAR_ANALYSE_DATA:
      return {
        ...state,
        analyseData: null,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default contentAnalyseReducer;
