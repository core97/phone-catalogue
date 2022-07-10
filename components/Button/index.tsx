/* eslint-disable react/destructuring-assignment */
import { useTranslation } from 'hooks/useTranslation';
import { classNames } from 'utils/styles-constants';
import { ButtonProps } from './Button.interface';
import styles from './Button.module.css';

export const Button = ({
  children,
  disabled,
  isFullWidth,
  isLoading,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const { translation } = useTranslation();
  const buttonClassNames = `${styles.button} ${
    isFullWidth ? classNames.width.full : ''
  } ${classNames.fontWeight.semibold} ${classNames.fontSize.sm}`;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={buttonClassNames}
      disabled={disabled || isLoading}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(onClick && { onClick })}
    >
      {isLoading ? translation.globalMsg.loading : children}
    </button>
  );
};
