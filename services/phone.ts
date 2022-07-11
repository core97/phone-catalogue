import { httpInstance } from 'services/http-instance';
import { Phone } from 'types/models';
import { Endpoints } from 'types/endpoints';

export const savePhone = async (phone: Phone) => {
  await httpInstance.put(Endpoints.PHONES, phone);
};

export const getPhones = async () => {
  const res = await httpInstance.get<Phone[]>(Endpoints.PHONES);
  return res.data;
};

export const getPhone = async (phoneId: string) => {
  const endpoint = `${Endpoints.PHONES}/${phoneId}`;
  const res = await httpInstance.get<Phone>(endpoint);
  return res.data;
}

export const deletePhone = async (phoneId: string) => {
  const endpoint = `${Endpoints.PHONES}/${phoneId}`;
  const res = await httpInstance.delete(endpoint);
  return res.data;
}
