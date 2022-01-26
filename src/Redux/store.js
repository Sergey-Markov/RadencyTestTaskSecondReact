import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { reducer } from "./reducer";
import { loggerMiddleware } from "../middlewares/logger";
const persistConfig = {
  key: "root",
  storage,
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(loggerMiddleware)
  // other store enhancers if any
);

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, enhancer);
export let persistor = persistStore(store);
