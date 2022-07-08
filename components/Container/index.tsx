import { classNames } from 'utils/styles-constants';
import { Props } from './Container.interface';
import styles from './Container.module.css';

export const Container = ({
  children,
  alignItems,
  display,
  flexDirection,
  justifyContent,
  size,
}: Props) => {
  const defaultClassNameWidth = classNames.width.full;

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
