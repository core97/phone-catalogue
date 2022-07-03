import { SizeMeasurement } from 'types/styles';
import styles from './Container.module.css';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  size?: SizeMeasurement;
};

export const Container = ({ children, size }: Props) => {
  const defaultClassNameWidth = 'width--full';
  const classNames = {
    width: {
      '2xl': 'width--2xl',
      xl: 'width--xl',
      lg: 'width--lg',
      md: 'width--md',
      sm: 'width--sm',
    } as { [key in SizeMeasurement]: string },
  };

  return (
    <div
      className={
        size ? styles[classNames.width[size]] : styles[defaultClassNameWidth]
      }
    >
      {children}
    </div>
  );
};
