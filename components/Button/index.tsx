/* eslint-disable react/destructuring-assignment */
import { Text } from 'components/Text';
import { useTranslation } from 'hooks/useTranslation';
import { classNames } from 'utils/styles-constants';
import { Props } from './Button.interface';
import styles from './Button.module.css';

export const Button = (props: Props) => {
  const { translation } = useTranslation();
  const buttonClassNames = `${styles.button} ${
    props.isFullWidth ? classNames.width.full : ''
  }`;

  /* if (props.as === 'link') {
    return (
      <Link href={props.link}>
        <a className={buttonClassNames}>
          <Text as="span" fontWeight="semibold">
            {props.children}
          </Text>
        </a>
      </Link>
    );
  } */

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
        {props.isLoading ? translation.globalMsg.loading : props.children}
      </Text>
    </button>
  );
};
