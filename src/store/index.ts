import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import cartReducer from "./slices/cartSlice";
import uiReducer from "./slices/uiSlice";
// Endpoints are registered by side effect of import (injectEndpoints in productsApi.ts, etc.)
import "./api/productsApi";

export function makeStore() {
  return configureStore({
    reducer: {
      cart: cartReducer,
      ui: uiReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
