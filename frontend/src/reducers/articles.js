import {
  REQUEST_ARTICLES_DATA,
  RECEIVE_ARTICLES_DATA,
  DELETE_ARTICLE,
  GET_ARTICLE,
  EDIT_ARTICLE,
  CLEAR_EDIT_ARTICLE,
} from '../constants/actionTypes';

const initalState = {
  articlesData: [],
  articleToEdit: null,
  isEditing: false,
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
    case GET_ARTICLE:
      return {
        ...state,
        articleToEdit: state.articlesData.find(
          (article) => article.id === action.payload
        ),
        isEditing: true,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    case EDIT_ARTICLE:
      return {
        ...state,
        articleToEdit: null,
        isSuccess: action.isSuccess,
        isEditing: false,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    case CLEAR_EDIT_ARTICLE:
      return {
        ...state,
        articleToEdit: null,
        isSuccess: false,
        isEditing: false,
      };
    default:
      return state;
  }
};
export default articlesReducer;
