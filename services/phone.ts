import { httpInstance } from 'services/http-instance';
import { Phone } from 'types/models';

export const savePhone = async (phone: Phone): Promise<void> => {
  const endpoint = '/phones';
  await httpInstance.put(endpoint, phone);
};
