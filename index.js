import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./src/App";
import './src/index.css'
import {Provider} from 'react-redux'
import store from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let persistor = persistStore(store)

root.render(
  <Provider store={store}>
  <StrictMode>
      <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
  </StrictMode>
  </Provider>
);