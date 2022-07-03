import React from 'react';
import { classNames } from 'utils/constants-styles';
import { SizeMeasurement, FontWeight } from 'types/styles';

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

  return (
    <Component
      className={`${
        size ? classNames.fontSize[size] : classNames.fontSize.md
      } ${
        fontWeight
          ? classNames.fontWeight[fontWeight]
          : classNames.fontWeight.medium
      }`}
    >
      {children}
    </Component>
  );
};
