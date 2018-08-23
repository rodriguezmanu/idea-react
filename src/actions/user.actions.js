import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  ME_REQUEST,
  ME_SUCCESS,
  ME_FAILURE,
} from '../constants/actionTypes';
import { API } from '../constants/endpoints';
import { post, remove, get } from '../middleware/api';

/**
 * Signup API handler
 * @param {String} email
 * @param {String} password
 */
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

/**
 * Login API handler
 * @param {String} email
 * @param {String} password
 */
export const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  post({
    url: API.URL + API.USERS.LOGIN,
    body: { email, password },
    success: LOGIN_SUCCESS,
    failure: LOGIN_FAILURE,
    dispatch,
  });
};

/**
 * Logout API handler
 * @param {String} token
 */
export const logout = token => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });

  remove({
    url: API.URL + API.USERS.LOGOUT,
    body: { refresh_token: token },
    success: LOGOUT_SUCCESS,
    failure: LOGOUT_FAILURE,
    dispatch,
  });
};

/**
 * Login API handler
 * @param {String} email
 * @param {String} password
 */
export const me = () => (dispatch) => {
  dispatch({ type: ME_REQUEST });
  get({
    url: API.URL + API.USERS.ME,
    success: ME_SUCCESS,
    failure: ME_FAILURE,
    dispatch,
  });
};
