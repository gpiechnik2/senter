import {
  REQUEST_SEARCH_DATA,
  RECEIVE_SEARCH_DATA,
} from '../constants/actionTypes';

const initalState = {
  searchData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const searchReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_SEARCH_DATA:
      return {
        ...state,
        searchData: action.searchData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    // case CLEAR_CHECK_DATA:
    //   return {
    //     ...state,
    //     checkData: null,
    //     isLoading: false,
    //     isError: false,
    //     errorMsg: '',
    //   };

    default:
      return state;
  }
};
export default searchReducer;
