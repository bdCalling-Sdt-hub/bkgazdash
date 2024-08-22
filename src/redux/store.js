// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';



export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
  },
  middleware:(getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(baseApi.middleware)
  }
})