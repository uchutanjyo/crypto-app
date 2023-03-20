import axios from "axios";
import {
  GET_COINS_SUCCESS,
  GET_COINS_PENDING,
  GET_COINS_ERROR,
//   SET_ACTIVE_CATEGORY,
//   SET_ACTIVE_DIRECTION,
//   SET_ACTIVE_KEY,
//   SET_ACTIVE_RESULTS_PER_PAGE,
//   INCREMENT_PAGE_NUM,
//   DECREMENT_PAGE_NUM
} from "./reducers.js";

export const getCoinsData = () => async (dispatch, getState) => {
  const state = getState();
  console.log(state)
  try {
    dispatch({ type: GET_COINS_PENDING });
    const { data } = await axios(
      // `https://dog.ceo/api/breeds/image/random`
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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


// const thunkFunction = (dispatch, getState) => {
//     // logic here that can dispatch actions or read state
//   }
  
//   store.dispatch(thunkFunction)