import {
  REQUEST_AUDITCHECK_DATA,
  RECEIVE_AUDITCHECK_DATA,
  CLEAR_AUDITCHECK_ERROR,
} from '../constants/actionTypes';

const initalState = {
  auditCheckData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const auditCheckReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_AUDITCHECK_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_AUDITCHECK_DATA:
      return {
        ...state,
        auditCheckData: action.auditCheckData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    case CLEAR_AUDITCHECK_ERROR:
      return {
        ...state,
        auditCheckData: null,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default auditCheckReducer;
