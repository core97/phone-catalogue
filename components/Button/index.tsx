/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';
import { Text } from 'components/Text';
import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'utils/constants-styles';
import styles from './Button.module.css';

type ClickableProps = {
  as: 'button';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (...args: any[]) => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

type LinkProps = { as: 'link'; link: string };

type Props = {
  children: string;
  isFullWidth?: boolean;
} & (ClickableProps | LinkProps);

export const Button = (props: Props) => {
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
