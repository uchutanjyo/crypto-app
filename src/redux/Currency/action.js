import {
  SET_CURRENCY
} from "./reducers.js";


export const setCurrency = (currency) => async (dispatch, getState) => {
  const state = getState();
    dispatch({ 
      type: SET_CURRENCY,
      payload: currency
    });
  }