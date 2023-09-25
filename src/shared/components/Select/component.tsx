import { FC } from 'react';
import { Select as AntSelect, SelectProps } from 'antd';

export const Select:FC<SelectProps> = ({ ...rest }) => (
  <AntSelect {...rest} />
);
