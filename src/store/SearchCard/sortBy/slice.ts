import { createSlice } from '@reduxjs/toolkit';

export const sortBySlice = createSlice({
  name: 'sortBy',
  initialState: 'relevance',
  reducers: {
    changeSortParams: (state: string) => {
      if (state === 'relevance') {
        return 'newest';
      }
      return 'relevance';
    },
  },
});
