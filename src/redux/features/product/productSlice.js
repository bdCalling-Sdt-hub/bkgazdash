// src/redux/features/product/productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    selectedProduct: null,
    // other initial state
  },
  reducers: {
    selectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    // other reducers
  },
});

export const { selectedProduct } = productSlice.actions;

export default productSlice.reducer;
