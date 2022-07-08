import { SizeMeasurement } from 'types/styles';

const width: { [key in SizeMeasurement | 'full']: string } = {
  full: 'width--full',
  '2xl': 'width--2xl',
  xl: 'width--xl',
  lg: 'width--lg',
  md: 'width--md',
  sm: 'width--sm',
} as const;

const display = {
  block: 'display--block',
  flex: 'display--flex',
} as const;

const flexDirection = {
  column: 'flex-direction--column',
  row: 'flex-direction--row',
} as const;

const flexDistribution = {
  'flex-start': 'justify-content--flex-start',
  'flex-end': 'justify-content--flex-end',
  center: 'justify-content--center',
  'space-between': 'justify-content--space-between',
  'space-around': 'justify-content--space-around',
} as const;

const fontSize: { [key in SizeMeasurement]: string } = {
  '2xl': 'font-size--2xl',
  xl: 'font-size--xl',
  lg: 'font-size--lg',
  md: 'font-size--md',
  sm: 'font-size--sm',
} as const;

const fontWeight = {
  black: 'font-weight--black',
  extrabold: 'font-weight--extrabold',
  bold: 'font-weight--bold',
  semibold: 'font-weight--semibold',
  medium: 'font-weight--medium',
  normal: 'font-weight--normal',
  light: 'font-weight--light',
  thin: 'font-weight--thin',
} as const;

export const classNames = {
  width,
  display,
  flexDirection,
  justifyContent: flexDistribution,
  alignItems: flexDistribution,
  fontSize,
  fontWeight,
} as const;
