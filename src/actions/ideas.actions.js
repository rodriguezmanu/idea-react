import {
  IDEAS_REQUEST,
  IDEAS_SUCCESS,
  IDEAS_FAILURE,
} from '../constants/actionTypes';
import { API } from '../constants/endpoints';
import { get } from '../middleware/api';

/**
 * GetIdeas API handler
 */
export const getIdeas = () => (dispatch) => {
  dispatch({ type: IDEAS_REQUEST });
  get({
    url: API.URL + API.IDEAS.GET,
    success: IDEAS_SUCCESS,
    failure: IDEAS_FAILURE,
    dispatch,
  });
};
