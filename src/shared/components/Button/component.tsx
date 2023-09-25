import { FC } from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';

export const Button:FC<ButtonProps> = ({ ...rest }) => (
  <AntdButton {...rest} />
);
