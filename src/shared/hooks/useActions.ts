import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import * as searchActions from '@/store/SearchCard/searchData/actions';
import {
  sortBySlice, itemsOnPageSlice, searchKeywordSlice, searchSlice, currentPageSlice,
} from '@/store/SearchCard';

const rootActions = {
  ...sortBySlice.actions,
  ...itemsOnPageSlice.actions,
  ...searchKeywordSlice.actions,
  ...searchSlice.actions,
  ...currentPageSlice.actions,
  ...searchActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
