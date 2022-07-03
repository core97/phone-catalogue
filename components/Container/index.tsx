import { classNames } from 'utils/constants-styles';
import { SizeMeasurement, Display, FlexDistribution } from 'types/styles';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  alignItems?: FlexDistribution;
  display?: Display;
  justifyContent?: FlexDistribution;
  size?: SizeMeasurement;
};

export const Container = ({
  children,
  alignItems,
  display,
  justifyContent,
  size,
}: Props) => {
  const defaultClassNameWidth = 'width--full';

  return (
    <div
      className={`${size ? classNames.width[size] : defaultClassNameWidth} ${
        display ? classNames.display[display] : classNames.display.block
      } ${justifyContent ? classNames.justifyContent[justifyContent] : ''} ${
        alignItems ? classNames.alignItems[alignItems] : ''
      }`}
    >
      {children}
    </div>
  );
};
