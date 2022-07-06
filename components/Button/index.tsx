/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';
import { Text } from 'components/Text';
import { classNames } from 'utils/constants-styles';
import { ClickableProps, LinkProps } from './Button.interface';
import styles from './Button.module.css';

export const Button = (props: ClickableProps | LinkProps) => {
  const buttonClassNames = `${styles.button} ${
    props.isFullWidth ? classNames.width.full : ''
  }`;

  if (props.as === 'link') {
    return (
      <Link href={props.link}>
        <a className={buttonClassNames}>
          <Text as="span" fontWeight="semibold">
            {props.children}
          </Text>
        </a>
      </Link>
    );
  }

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={props.type}
      className={buttonClassNames}
      disabled={props.disabled || props.isLoading}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(props.onClick && { onClick: props.onClick })}
    >
      <Text as="span" fontWeight="semibold">
        {props.isLoading ? 'Cargando...' : props.children}
      </Text>
    </button>
  );
};
