import React from 'react';
import { classNames } from 'utils/styles-constants';
import { TextProps } from './Text.interface';

export const Text = ({
  children,
  fontWeight,
  size,
  as: Component = 'p',
}: TextProps) => (
  <Component
    className={`${size ? classNames.fontSize[size] : classNames.fontSize.md} ${
      fontWeight
        ? classNames.fontWeight[fontWeight]
        : classNames.fontWeight.medium
    }`}
  >
    {children}
  </Component>
);
