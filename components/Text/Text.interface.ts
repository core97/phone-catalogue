import { SizeMeasurement, FontWeight } from 'types/styles';

export interface TextProps {
  children: string;
  fontWeight?: FontWeight;
  size?: SizeMeasurement;
  as?: 'span' | 'p' | 'h4' | 'h3' | 'h2' | 'h1';
}
