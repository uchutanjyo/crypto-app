import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import counterReducer from "./Counter/reducers/counterSlice";
import coinsReducer from "./Coins/reducers";
import chartsReducer from './Charts/reducers';
import coinReducer from './Coin/reducers';
import currencyReducer from './Currency/reducers';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ['charts', 'coins', 'currency', 'counter', 'charts']
}

const reducer = combineReducers({
    counter: counterReducer,
    coins: coinsReducer,
    charts: chartsReducer,
    coin: coinReducer,
    currency: currencyReducer
})


const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    // middleware: [thunk]
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [thunk, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
      
},
// applyMiddleware(thunk)
    );

export default store;