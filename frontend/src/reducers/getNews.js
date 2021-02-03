import { REQUEST_NEWS_DATA, RECEIVE_NEWS_DATA } from '../constants/actionTypes';

const initalState = {
  newsData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const getNewsReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_NEWS_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_NEWS_DATA:
      return {
        ...state,
        newsData: action.newsData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
export default getNewsReducer;
