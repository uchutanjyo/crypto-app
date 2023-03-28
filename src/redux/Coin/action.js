import axios from "axios";
import { mockCoinsData } from "../MockCoinsData.js";

import {
  FETCH_COIN_SUCCESS,
  FETCH_COIN_PENDING,
  FETCH_COIN_ERROR,
  SET_COIN_ID
} from "./reducers.js";

export const setCoinId = (coinId) => async (dispatch, getState) => {
  const state = getState();
    dispatch({ 
      type: SET_COIN_ID,
      payload: coinId
    });
  }

export const getCoinData = (coinId) => async (dispatch, getState) => {
  const state = getState();
  try {
    const filteredCoin = mockCoinsData.filter((coin) => {
      return coin.id === coinId.coinId 
     })
    dispatch({ type: FETCH_COIN_PENDING });
    const data = filteredCoin[0]
    // server down - uncomment soon
    // const data = await axios(
    //   `https://api.coingecko.com/api/v3/coins/${coinId.coinId}?localization=false`)
    dispatch({
      type: FETCH_COIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_COIN_ERROR,
      payload: err,
    });
  }
};