import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice.js";
import productsReducer from "./productsSlice.js";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    products: productsReducer,
  },
});
