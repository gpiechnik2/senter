import {
  REQUEST_USERAGENTCHANGE_DATA,
  RECEIVE_USERAGENTCHANGE_DATA,
  CLEAR_USERAGENTCHANGE_DATA,
} from '../constants/actionTypes';

const initalState = {
  userAgentChangeData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const changeUserAgentReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_USERAGENTCHANGE_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_USERAGENTCHANGE_DATA:
      return {
        ...state,
        userAgentChangeData: action.userAgentChangeData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    case CLEAR_USERAGENTCHANGE_DATA:
      return {
        ...state,
        userAgentChangeData: null,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default changeUserAgentReducer;
