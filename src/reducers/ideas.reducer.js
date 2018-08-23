import {
  IDEAS_REQUEST,
  IDEAS_SUCCESS,
  IDEAS_FAILURE,
} from '../constants/actionTypes';

const ideas = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case IDEAS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case IDEAS_SUCCESS:
      return {
        ...state,
        ...action.data,
        isFetching: false,
      };
    case IDEAS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default ideas;
