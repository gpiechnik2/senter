import {
  REQUEST_ARTICLES_DATA,
  RECEIVE_ARTICLES_DATA,
  DELETE_ARTICLE,
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
    case DELETE_ARTICLE:
      return {
        ...state,
        articlesData: state.articlesData.filter(
          (article) => article.id !== action.payload
        ),
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default articlesReducer;
