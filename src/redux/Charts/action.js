import axios from "axios";
import {
  GET_PRICES_SUCCESS,
  GET_PRICES_PENDING,
  GET_PRICES_ERROR,
} from "./reducers.js";
import { mockPricesData } from "../MockPricesData.js";

export const getChartsData = () => async (dispatch, getState) => {
  const state = getState();
  try {
    dispatch({
      type: GET_PRICES_PENDING
    });
    const  data  =  mockPricesData
  // await axios(
  //     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
  //   );
    dispatch({
      type: GET_PRICES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRICES_ERROR,
      payload: err,
    });
  }
};