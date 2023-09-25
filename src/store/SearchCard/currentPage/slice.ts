import { createSlice } from '@reduxjs/toolkit';

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: 2,
  reducers: {
    changeCurrentPage: (state, action) => action.payload,
  },
});
