import {
  REQUEST_AUDITS_DATA,
  RECEIVE_AUDITS_DATA,
  DELETE_AUDIT,
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
    case DELETE_AUDIT:
      return {
        ...state,
        auditsData: state.auditsData.filter(
          (audit) => audit.id !== action.payload
        ),
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default auditsReducer;
