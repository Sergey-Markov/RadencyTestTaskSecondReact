import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { enhancer } from "./enhancers";
import reducer from "./asyncReducer";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["notes"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, enhancer);
export let persistor = persistStore(store);
