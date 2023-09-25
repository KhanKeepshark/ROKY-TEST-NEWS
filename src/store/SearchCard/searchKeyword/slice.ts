import { createSlice } from '@reduxjs/toolkit';

export const searchKeywordSlice = createSlice({
  name: 'searchKeyword',
  initialState: '',
  reducers: {
    searchByKeyWord: (_, action) => action.payload,
  },
});
