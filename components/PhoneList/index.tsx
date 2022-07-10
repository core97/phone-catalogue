import { memo } from 'react';
import { PhoneCard } from 'components/PhoneCard';
import { PhoneListProps } from './PhoneList.interface';
import styles from './PhoneList.module.css';

export const PhoneList = memo(({ list }: PhoneListProps) => (
  <ul className={styles.list}>
    {list.map(({ id, image, title }) => (
      <li key={id}>
        <PhoneCard id={id} image={image} title={title} />
      </li>
    ))}
  </ul>
));
