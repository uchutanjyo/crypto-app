import axios from "axios";
import {
  GET_CHARTSDATA_SUCCESS,
  GET_CHARTSDATA_PENDING,
  GET_CHARTSDATA_ERROR,
} from "./reducers.js";
import { mockPricesData } from "../MockPricesData.js";

export const getChartsData = () => async (dispatch, getState) => {
  const state = getState();
  try {
    dispatch({
      type: GET_CHARTSDATA_PENDING
    });
    // console.log(state.charts.data, 'GS-charts')
    let data
    if (state.charts.data === undefined || !state.charts.data[1]) {
     data =  
  await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily`
    );
    // console.log(data, 'newdata')
  } else {
    data = state.charts.data
    // console.log(data, 'LS data')
  }
  
    dispatch({
      type: GET_CHARTSDATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_CHARTSDATA_ERROR,
      payload: err,
    });
  }
};