import {
  REQUEST_AUDITS_DATA,
  RECEIVE_AUDITS_DATA,
} from '../constants/actionTypes';

const initalState = {
  auditsData: [],
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const auditsReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_AUDITS_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_AUDITS_DATA:
      return {
        ...state,
        auditsData: action.auditsData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
export default auditsReducer;
