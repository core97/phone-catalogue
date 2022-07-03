import {
  SizeMeasurement,
  Display,
  FlexDistribution,
  FontWeight,
} from 'types/styles';

export const classNames = {
  width: {
    full: 'width--full',
    '2xl': 'width--2xl',
    xl: 'width--xl',
    lg: 'width--lg',
    md: 'width--md',
    sm: 'width--sm',
  } as { [key in SizeMeasurement | 'full']: string },
  display: {
    block: 'display--block',
    flex: 'display--flex',
  } as { [key in Display]: string },
  justifyContent: {
    'flex-start': 'justify-content--flex-start',
    'flex-end': 'justify-content--flex-end',
    center: 'justify-content--center',
    'space-between': 'justify-content--space-between',
    'space-around': 'justify-content--space-around',
  } as { [key in FlexDistribution]: string },
  alignItems: {
    'flex-start': 'alignItems--flex-start',
    'flex-end': 'alignItems--flex-end',
    center: 'alignItems--center',
    'space-between': 'alignItems--space-between',
    'space-around': 'alignItems--space-around',
  } as { [key in FlexDistribution]: string },
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
