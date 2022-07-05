import { httpInstance } from 'services/http-instance';
import { Phone } from 'types/models';

export const savePhone = async (phone: Phone): Promise<void> => {
  const endpoint = '/phones';
  await httpInstance.put(endpoint, phone);
};

export const getPhones = async (): Promise<Phone[]> => {
  const endpoint = '/phones';
  const res = await httpInstance.get(endpoint);
  return res.data;
};

export const getPhone = async (phoneId: string): Promise<Phone> => {
  const endpoint = `/phones/${phoneId}`;
  const res = await httpInstance.get(endpoint);
  return res.data;
}

export const deletePhone = async (phoneId: string): Promise<void> => {
  const endpoint = `/phones/${phoneId}`;
  const res = await httpInstance.delete(endpoint);
  return res.data;
}
