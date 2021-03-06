import {
  SizeMeasurement,
  Display,
  FlexDistribution,
  FlexDirection,
} from 'types/styles';

export interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
  alignItems?: FlexDistribution;
  display?: Display;
  flexDirection?: FlexDirection;
  justifyContent?: FlexDistribution;
  size?: SizeMeasurement;
}
