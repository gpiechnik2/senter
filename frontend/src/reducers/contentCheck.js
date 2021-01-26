import {
  REQUEST_CHECK_DATA,
  RECEIVE_CHECK_DATA,
  CLEAR_CHECK_DATA,
} from '../constants/actionTypes';

const initalState = {
  checkData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const contentCheckReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_CHECK_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_CHECK_DATA:
      return {
        ...state,
        checkData: action.checkData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    case CLEAR_CHECK_DATA:
      return {
        ...state,
        checkData: null,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };

    default:
      return state;
  }
};
export default contentCheckReducer;
