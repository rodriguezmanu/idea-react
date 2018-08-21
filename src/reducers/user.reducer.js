import { push } from 'react-router-redux';
import {
  LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants/actionTypes';

const user = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      try {
        const serializedState = JSON.stringify(action.data);
        localStorage.setItem('tokens', serializedState);
      } catch (err) {
        console.warn(err);
      }
      return {
        ...state,
        ...action.data,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
      };
    case LOGOUT_SUCCESS:
      try {
        localStorage.removeItem('tokens');
      } catch (err) {
        console.warn(err);
      }
      return undefined;
    case LOGOUT_FAILURE:
      return {};
    default:
      return state;
  }
};

export default user;
