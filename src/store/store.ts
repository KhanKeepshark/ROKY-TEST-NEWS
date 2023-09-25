import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  currentPageSlice,
  itemsOnPageSlice, searchKeywordSlice, searchSlice, sortBySlice,
} from './SearchCard';

const reducers = combineReducers({
  sortBy: sortBySlice.reducer,
  searchData: searchSlice.reducer,
  itemsOnPage: itemsOnPageSlice.reducer,
  searchKeyword: searchKeywordSlice.reducer,
  currentPage: currentPageSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
