import Link from 'next/link';
import Image from 'next/image';
import { Text } from 'components/Text';
import { Props } from './PhoneCard.interface';
import styles from './PhoneCard.module.css';

export const PhoneCard = ({ id, image, title }: Props) => (
  <Link href={`/phone/${id}`}>
    <a className={styles['card-wrapper']}>
      <figure className={styles['image-wrapper']}>
        <Image src={image} width={500} height={500} layout="responsive" />
      </figure>
      <Text as="h4">{title}</Text>
    </a>
  </Link>
);
