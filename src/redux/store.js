import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import counterReducer from "./reducers/counterSlice";
import coinsReducer from "./Coins/reducers";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        coins: coinsReducer,
      },
      
},
applyMiddleware(thunk)
    );

export default store;