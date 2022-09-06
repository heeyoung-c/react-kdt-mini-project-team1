import { createSlice } from '@reduxjs/toolkit';

export const searchProducts = createSlice({
  name: 'searchProducts',
  initialState: null,
  reducers: {
    changeSearchProducts(state, val) {
      return val.payload;
    },
  },
});

export const { changeSearchProducts } = searchProducts.actions;
