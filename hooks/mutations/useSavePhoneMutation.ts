import { useMutation, useQueryClient } from 'react-query';
import { savePhone } from 'services/phone';
import { PHONE_KEYS } from 'utils/query-keys';
import { PhoneEntity } from 'types/models';

export const useSavePhoneMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation((phone: PhoneEntity) => savePhone(phone), {
    onSuccess: () => {
      queryClient.invalidateQueries(PHONE_KEYS.lists());
    },
  });

  return mutation;
};
