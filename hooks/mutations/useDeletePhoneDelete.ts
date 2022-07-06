import { useMutation, useQueryClient } from 'react-query';
import { deletePhone } from 'services/phone';
import { PHONE_KEYS } from 'utils/query-keys';

export const useDeletePhoneMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation((phoneId: string) => deletePhone(phoneId), {
    onSuccess: () => {
      queryClient.invalidateQueries(PHONE_KEYS.lists());
    },
  });

  return mutation;
};
