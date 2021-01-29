import {
  REQUEST_CREATEAUDIT_DATA,
  RECEIVE_CREATEAUDIT_DATA,
  CLEAR_CREATEAUDIT_DATA,
} from '../constants/actionTypes';

const initalState = {
  createAuditData: null,
  isLoadingSave: false,
  isErrorSave: false,
  errorMsgSave: '',
};

const createAuditReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_CREATEAUDIT_DATA:
      return {
        ...state,
        isLoadingSave: true,
        isErrorSave: false,
        errorMsgSave: '',
      };
    case RECEIVE_CREATEAUDIT_DATA:
      return {
        ...state,
        createAuditData: action.createAuditData,
        isLoadingSave: false,
        isErrorSave: action.isErrorSave,
        errorMsgSave: action.errorMsgSave,
      };
    case CLEAR_CREATEAUDIT_DATA:
      return {
        ...state,
        createAuditData: null,
        isLoadingSave: false,
        isErrorSave: false,
        errorMsgSave: '',
      };
    default:
      return state;
  }
};
export default createAuditReducer;
