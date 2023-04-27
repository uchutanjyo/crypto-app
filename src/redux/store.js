import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import counterReducer from "./Counter/reducers/counterSlice";
import coinsReducer from "./Coins/reducers";
import chartsReducer from './Charts/reducers';
import coinReducer from './Coin/reducers';
import currencyReducer from './Currency/reducers';
import storage from 'redux-persist/lib/storage';
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
    storage
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
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
      
},
applyMiddleware(thunk)
    );

export default store;