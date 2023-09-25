import { createSlice } from '@reduxjs/toolkit';

export const itemsOnPageSlice = createSlice({
  name: 'itemsOnPage',
  initialState: '20',
  reducers: {
    changeItemsNumber: (state: string) => {
      if (state === '20') {
        return '40';
      }
      return '20';
    },
  },
});
