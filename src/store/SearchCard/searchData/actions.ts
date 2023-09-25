import { api } from '@/shared/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchSlice } from '.';

interface FetchDataProps {
  itemsOnPage: number;
  sortBy: string;
  searchKeyword: string;
}

interface ScrollDataProps extends FetchDataProps {
  currentPage: Number
}

export const fetchData = createAsyncThunk('search/fetchData', async ({ itemsOnPage, sortBy, searchKeyword }:FetchDataProps, thunkApi) => {
  try {
    const response = await api.get('/search', {
      params: {
        'page-size': itemsOnPage,
        'show-fields': 'thumbnail',
        'order-by': sortBy,
        'api-key': process.env.API_KEY,
        q: searchKeyword,
      },
    });
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue({});
  }
});

export const scrollData = createAsyncThunk(
  'search/scrollData',
  async ({
    itemsOnPage, sortBy, searchKeyword, currentPage,
  }:ScrollDataProps, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.get('/search', {
        params: {
          'page-size': itemsOnPage,
          'show-fields': 'thumbnail',
          'order-by': sortBy,
          'api-key': 'a5fc4a02-192f-4549-8807-04094596c67e',
          page: currentPage,
          q: searchKeyword,
        },
      });
      dispatch(searchSlice.actions.addNewData(response.data.response.results));
    } catch (error) {
      return rejectWithValue({});
    }
  },
);
