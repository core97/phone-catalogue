import React from 'react';
import { SizeMeasurement, FontWeight } from 'types/styles';
import styles from './Text.module.css';

type Props<T extends React.ElementType> = {
  children: string;
  fontWeight?: FontWeight;
  size?: SizeMeasurement;
  as?: T;
};

export const Text = <
  T extends React.ElementType = 'span' | 'p' | 'h4' | 'h3' | 'h2' | 'h1'
>({
  children,
  fontWeight,
  size,
  as,
}: Props<T>) => {
  const Component = as || 'p';

  const classNames = {
    fontSize: {
      '2xl': 'font-size--2xl',
      xl: 'font-size--xl',
      lg: 'font-size--lg',
      md: 'font-size--md',
      sm: 'font-size--sm',
    } as { [key in SizeMeasurement]: string },
    fontWeight: {
      black: 'font-weight--black',
      extrabold: 'font-weight--extrabold',
      bold: 'font-weight--bold',
      semibold: 'font-weight--semibold',
      medium: 'font-weight--medium',
      normal: 'font-weight--normal',
      light: 'font-weight--light',
      thin: 'font-weight--thin',
    } as { [key in FontWeight]: string },
  };

  return (
    <Component
      className={`${
        size
          ? styles[classNames.fontSize[size]]
          : styles[classNames.fontSize.md]
      } ${
        fontWeight
          ? styles[classNames.fontWeight[fontWeight]]
          : styles[classNames.fontWeight.medium]
      }`}
    >
      {children}
    </Component>
  );
};
