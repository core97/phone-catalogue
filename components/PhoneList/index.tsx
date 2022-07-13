import { memo } from 'react';
import { PhoneCard } from 'components/PhoneCard';
import { Text } from 'components/Text';
import { usePhonesQuery } from 'hooks/queries';
import { useTranslation } from 'hooks/useTranslation';
import styles from './PhoneList.module.css';

export const PhoneList = memo(() => {
  const phonesQuery = usePhonesQuery();
  const { translation } = useTranslation();

  if (phonesQuery.isLoading) {
    return <Text>{translation.globalMsg.loading}</Text>;
  }

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
