import { classNames } from 'utils/constants-styles';
import {
  SizeMeasurement,
  Display,
  FlexDistribution,
  FlexDirection,
} from 'types/styles';
import styles from './Container.module.css';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  alignItems?: FlexDistribution;
  display?: Display;
  flexDirection?: FlexDirection;
  justifyContent?: FlexDistribution;
  size?: SizeMeasurement;
};

export const Container = ({
  children,
  alignItems,
  display,
  flexDirection,
  justifyContent,
  size,
}: Props) => {
  const defaultClassNameWidth = 'width--full';

  return (
    <div
      className={`${styles.wrapper} ${
        size ? classNames.width[size] : defaultClassNameWidth
      } ${display ? classNames.display[display] : classNames.display.block} ${
        flexDirection ? classNames.flexDirection[flexDirection] : ''
      } ${justifyContent ? classNames.justifyContent[justifyContent] : ''} ${
        alignItems ? classNames.alignItems[alignItems] : ''
      }`}
    >
      {children}
    </div>
  );
};
