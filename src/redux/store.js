import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import counterReducer from "./Counter/reducers/counterSlice";
import coinsReducer from "./Coins/reducers";
import pricesReducer from './Charts/reducers';
import coinReducer from './Coin/reducers';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        coins: coinsReducer,
        prices: pricesReducer,
        coin: coinReducer
      },
      
},
applyMiddleware(thunk)
    );

export default store;