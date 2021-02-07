import {
  REQUEST_AUDITS_DATA,
  RECEIVE_AUDITS_DATA,
  DELETE_AUDIT,
  GET_AUDIT,
  CLEAR_AUDIT_CHECK,
} from '../constants/actionTypes';

const initalState = {
  auditsData: [],
  auditToCheck: null,
  isChecking: false,
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
    case GET_AUDIT:
      return {
        ...state,
        auditToCheck: state.auditsData.find(
          (audit) => audit.id === action.payload
        ),
        isChecking: true,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    case CLEAR_AUDIT_CHECK:
      return {
        ...state,
        auditToCheck: null,
        isChecking: false,
      };
    default:
      return state;
  }
};
export default auditsReducer;
