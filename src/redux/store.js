import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import counterReducer from "./Counter/reducers/counterSlice";
import coinsReducer from "./Coins/reducers";
import chartsReducer from './Charts/reducers';
import coinReducer from './Coin/reducers';
import currencyReducer from './Currency/reducers';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        coins: coinsReducer,
        charts: chartsReducer,
        coin: coinReducer,
        currency: currencyReducer
      },
      
},
applyMiddleware(thunk)
    );

export default store;