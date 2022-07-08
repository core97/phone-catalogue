import axios from 'axios';

export const httpInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DOMAIN}${process.env.NEXT_PUBLIC_BASE_URL_API}`,
  timeout: 10 * 60000,
});
