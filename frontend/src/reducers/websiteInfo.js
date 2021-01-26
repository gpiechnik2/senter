import {
  REQUEST_WEBSITEINFO_DATA,
  RECEIVE_WEBSITEINFO_DATA,
} from '../constants/actionTypes';

const initalState = {
  websiteInfoData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const websiteInfoReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_WEBSITEINFO_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_WEBSITEINFO_DATA:
      return {
        ...state,
        websiteInfoData: action.websiteInfoData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
export default websiteInfoReducer;
