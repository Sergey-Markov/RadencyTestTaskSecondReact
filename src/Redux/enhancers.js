import { compose } from "redux";

import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { loggerMiddleware } from "../middlewares/logger";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export const enhancer = composeEnhancers(
  applyMiddleware(loggerMiddleware, thunk)
  // other store enhancers if any
);
