import { FC } from 'react';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';

const { Search } = Input;

export const SearchInput:FC<SearchProps> = ({ ...rest }) => (
  <Search {...rest} placeholder="Search" enterButton allowClear />
);
