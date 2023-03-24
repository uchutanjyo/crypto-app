import axios from "axios";
import { mockCoinsData } from "../MockCoinsData.js";
import { roundNumbersAndDivide } from "../../utils/roundNumbersAndDivide.js";

import {
  GET_COINS_SUCCESS,
  GET_COINS_PENDING,
  GET_COINS_ERROR,
} from "./reducers.js";


export const getCoinsData = () => async (dispatch, getState) => {
  const state = getState();
  try {
    dispatch({ type: GET_COINS_PENDING });
    const data  = mockCoinsData
    // await axios(
    //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    // );
    roundNumbersAndDivide(data);
    console.log(data);
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