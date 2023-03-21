import axios from "axios";
import {

} from "./reducers.js";

// refactor this soon
const roundNumbersAndDivide = (data) => {
  data.forEach((coin) => {
    coin.vol_over_market_cap = coin.total_volume / coin.market_cap;

    coin.circ_supply_over_total_supply = coin.circulating_supply / coin.total_supply;
    
    coin.price_change_percentage_7d_in_currency = parseFloat(
      coin.price_change_percentage_7d_in_currency
    ).toFixed(2);

    coin.price_change_percentage_1h_in_currency = parseFloat(
      coin.price_change_percentage_1h_in_currency
    ).toFixed(2);

    coin.price_change_percentage_24h_in_currency = parseFloat(
      coin.price_change_percentage_24h_in_currency
    ).toFixed(2);

    coin.price_change_percentage_24h_in_currency = parseFloat(
      coin.price_change_percentage_24h_in_currency
    ).toFixed(2);
    coin.current_price = parseFloat(coin.current_price).toFixed(2);
  });
};

export const getCoinsData = () => async (dispatch, getState) => {
  const state = getState();
  try {
    dispatch({ type: GET_COINS_PENDING });
    const { data } = await axios(
      // `https://dog.ceo/api/breeds/image/random`
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
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

// const thunkFunction = (dispatch, getState) => {
//     // logic here that can dispatch actions or read state
//   }

//   store.dispatch(thunkFunction)
