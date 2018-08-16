import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
} from '../constants/actionTypes';
import { API } from '../constants/endpoints';
import { post } from '../helpers/api';

export const signup = ({ email, password }) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  post({
    url: API.SIGNUP,
    body: { email, password },
    success: SIGNUP_SUCCESS,
    failure: SIGNUP_FAILURE,
    dispatch,
  });
};

export const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  post({
    url: `https://small-project-api.herokuapp.com${API.USERS.LOGIN}`, // @todo
    body: { email, password },
    success: LOGIN_SUCCESS,
    failure: LOGIN_FAILURE,
    dispatch,
  });
};
