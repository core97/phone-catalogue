import Link from 'next/link';
import Image from 'next/image';
import { Text } from 'components/Text';
import { Routes } from 'types/routes';
import { PhoneCardProps } from './PhoneCard.interface';
import styles from './PhoneCard.module.css';

export const PhoneCard = ({ id, image, title }: PhoneCardProps) => (
  <section className={styles.card}>
    <Link href={`${Routes.PHONE_DETAIL}${id}`}>
      <a >
        <figure className={styles['image-wrapper']}>
          <Image src={image} width={500} height={500} layout="responsive" />
        </figure>
        <Text as="h4">{title}</Text>
      </a>
    </Link>
  </section>
);
