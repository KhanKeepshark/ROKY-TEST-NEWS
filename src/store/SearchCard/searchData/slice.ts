import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './actions';

interface SearchState {
  isLoading: boolean;
  error: string | null;
  data: Record<string, any>;
}

const initialState: SearchState = {
  isLoading: false,
  error: null,
  data: {},
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addNewData: (state, action) => {
      const currentResults = state.data.results || [];
      const newResults = action.payload || [];
      return ({
        ...state,
        data: {
          ...state.data,
          results: [...currentResults, ...newResults],
        },
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.payload.response,
      }))
      .addCase(fetchData.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'error',
        data: {},
      }));
  },
});
