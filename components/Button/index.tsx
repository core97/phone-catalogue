/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import { useTranslation } from 'hooks/useTranslation';
import { classNames } from 'utils/styles-constants';
import { ButtonProps } from './Button.interface';
import styles from './Button.module.css';

export const Button = ({
  children,
  isFullWidth,
  isLoading,
  ...rest
}: ButtonProps) => {
  const { translation } = useTranslation();
  const buttonClassNames = `${styles.button} ${
    isFullWidth ? classNames.width.full : ''
  } ${classNames.fontWeight.semibold} ${classNames.fontSize.sm}`;

  return (
    <button
      {...rest}
      className={buttonClassNames}
      disabled={rest.disabled || isLoading}
    >
      {isLoading ? translation.globalMsg.loading : children}
    </button>
  );
};
