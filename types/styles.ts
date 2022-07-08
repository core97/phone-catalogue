import { classNames } from 'utils/styles-constants';

export type SizeMeasurement = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type FontWeight = keyof typeof classNames.fontWeight;

export type Display = keyof typeof classNames.display;

export type FlexDistribution = keyof typeof classNames.justifyContent;

export type FlexDirection = keyof typeof classNames.flexDirection;
