import {
  REQUEST_KEYWORDS_DATA,
  RECEIVE_KEYWORDS_DATA,
  DELETE_KEYWORD,
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
    default:
      return state;
  }
};
export default keywordsReducer;
