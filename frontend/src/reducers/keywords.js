import {
  REQUEST_KEYWORDS_DATA,
  RECEIVE_KEYWORDS_DATA,
  DELETE_KEYWORD,
  GET_KEYWORD,
  CLEAR_KEYWORD_CHECK,
} from '../constants/actionTypes';

const initalState = {
  keywordsData: [],
  keywordToCheck: null,
  isChecking: false,
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
    case DELETE_KEYWORD:
      return {
        ...state,
        keywordsData: state.keywordsData.filter(
          (keyword) => keyword.id !== action.payload
        ),
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    case GET_KEYWORD:
      return {
        ...state,
        keywordToCheck: state.keywordsData.find(
          (keyword) => keyword.id === action.payload
        ),
        isChecking: true,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    case CLEAR_KEYWORD_CHECK:
      return {
        ...state,
        keywordToCheck: null,
        isChecking: false,
      };
    default:
      return state;
  }
};
export default keywordsReducer;
