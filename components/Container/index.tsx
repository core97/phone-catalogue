import { SizeMeasurement } from 'types/styles';
import styles from './Container.module.css';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  size?: SizeMeasurement;
};

export const Container = ({ children, size }: Props) => {
  const defaultClassNameWidth = 'width--full';
  const classNameWidth: { [key in SizeMeasurement]: string } = {
    '2xl': 'width--2xl',
    xl: 'width--xl',
    lg: 'width--lg',
    md: 'width--md',
    sm: 'width--sm',
  };

  return (
    <div
      className={
        size ? styles[classNameWidth[size]] : styles[defaultClassNameWidth]
      }
    >
      {children}
    </div>
  );
};
