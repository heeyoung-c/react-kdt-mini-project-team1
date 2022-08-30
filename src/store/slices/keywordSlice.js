import { createSlice } from '@reduxjs/toolkit';

export const keyword = createSlice({
  name: 'keyword',
  initialState: '',
  reducers: {
    changeKeyword(state, val) {
      return val.payload;
    },
  },
});

export const { changeKeyword } = keyword.actions;
