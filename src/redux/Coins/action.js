import axios from "axios";

import {
  GET_COINS_SUCCESS,
  GET_COINS_PENDING,
  GET_COINS_ERROR,
} from "./reducers.js";

import store from "../store.js";

export const getCoinsData = (currency) => async (dispatch, getState) => {
  const state = getState();
  const currentCurrency = store.getState().currency.currency
  try {
    dispatch({
      type: GET_COINS_PENDING
    });
    const data =  
    await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: GET_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COINS_ERROR,
      payload: err,
    });
  }
};