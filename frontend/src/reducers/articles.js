import {
  REQUEST_ARTICLES_DATA,
  RECEIVE_ARTICLES_DATA,
} from '../constants/actionTypes';

const initalState = {
  articlesData: [],
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const articlesReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_ARTICLES_DATA:
      return {
        ...state,
        articlesData: action.articlesData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
export default articlesReducer;
