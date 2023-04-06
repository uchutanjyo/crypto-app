import axios from "axios";

import {
  SET_CURRENCY
} from "./reducers.js";

const currencies = ["GBP", "USD", "EUR", "CAD", "JPY"];


export const setCurrency = (currency) => async (dispatch, getState) => {
  const state = getState();
    dispatch({ 
      type: SET_CURRENCY,
      payload: currency
    });
  }

// export const getCoinData = (coinId) => async (dispatch, getState) => {
//   const state = getState();
//   try {
//     // const filteredCoin = mockCoinsData.filter((coin) => {
//     //   return coin.id === coinId.coinId 
//     //  })
//     dispatch({ type: FETCH_COIN_PENDING });
//     const data = mockCoinData
//     // mock data being used currently to reduce  number of api calls
//     // const {data} = await axios(
//     //   `https://api.coingecko.com/api/v3/coins/${coinId.coinId}?localization=false`)
//     dispatch({
//       type: FETCH_COIN_SUCCESS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: FETCH_COIN_ERROR,
//       payload: err,
//     });
//   }
// };