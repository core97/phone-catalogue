import { memo } from 'react';
import { PhoneCard } from 'components/PhoneCard';
import { usePhonesQuery } from 'hooks/queries';
import styles from './PhoneList.module.css';

export const PhoneList = memo(() => {
  const phonesQuery = usePhonesQuery();

  return (
    <ul className={styles.list}>
      {phonesQuery.data?.map(({ id, imageFileName, name }) => (
        <li key={id}>
          <PhoneCard id={id} image={imageFileName} title={name} />
        </li>
      ))}
    </ul>
  );
});
