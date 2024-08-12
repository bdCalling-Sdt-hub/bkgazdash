// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './api/services/productApi';
import productSlice from './features/product/productSlice';

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
