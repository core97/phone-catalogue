import { useQuery } from 'react-query';
import { getPhones } from 'services/phone';
import { PHONE_KEYS } from 'utils/query-keys';

export const usePhonesQuery = () => {
  const result = useQuery(PHONE_KEYS.lists(), getPhones);
  return result;
};
