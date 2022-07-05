import { useQuery } from 'react-query';
import { getPhone } from 'services/phone';
import { PHONE_KEYS } from 'utils/query-keys';

export const usePhoneQuery = (phoneId?: string) => {
  const result = useQuery(
    PHONE_KEYS.detail(phoneId as string),
    () => getPhone(phoneId as string),
    {
      enabled: !!phoneId,
    }
  );
  return result;
};
