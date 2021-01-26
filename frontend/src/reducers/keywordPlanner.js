import {
  REQUEST_KEYPLANNER_DATA,
  RECEIVE_KEYPLANNER_DATA,
} from '../constants/actionTypes';

const initalState = {
  keywordData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const keywordReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_KEYPLANNER_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_KEYPLANNER_DATA:
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
