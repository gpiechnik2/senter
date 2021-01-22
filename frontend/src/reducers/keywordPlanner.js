import { REQUEST_DATA, RECEIVE_DATA } from '../constants/actionTypes';

const initalState = {
  keywordData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const keywordReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_DATA:
      return {
        ...state,
        keywordData: action.keywordData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
export default keywordReducer;
