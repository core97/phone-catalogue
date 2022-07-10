import Link from 'next/link';
import { Text } from 'components/Text';
import { Routes } from 'types/routes';
import { Props } from './PhoneCard.interface';
import styles from './PhoneCard.module.css';

export const PhoneCard = ({ id, image, title }: Props) => (
  <Link href={`${Routes.PHONE_DETAIL}${id}`}>
    <a>
      <figure className={styles['image-wrapper']}>
        <img loading="lazy" src={image} alt={title} />
      </figure>
      <Text as="h4">{title}</Text>
    </a>
  </Link>
);
