import {
  REQUEST_KEYWORDS_DATA,
  RECEIVE_KEYWORDS_DATA,
} from '../constants/actionTypes';

const initalState = {
  keywordsData: [],
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const keywordsReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_KEYWORDS_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_KEYWORDS_DATA:
      return {
        ...state,
        keywordsData: action.keywordsData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
export default keywordsReducer;
