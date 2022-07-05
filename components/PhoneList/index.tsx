import { memo } from 'react';
import { Props as PhoneCardProps, PhoneCard } from 'components/PhoneCard';
import styles from './PhoneList.module.css';

type Props = {
  list: PhoneCardProps[];
};

export const PhoneList = memo(({ list }: Props) => (
  <ul className={styles.list}>
    {list.map(({ id, image, title }) => (
      <li key={id}>
        <PhoneCard id={id} image={image} title={title} />
      </li>
    ))}
  </ul>
));
