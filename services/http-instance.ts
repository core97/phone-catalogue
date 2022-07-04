import axios from 'axios';

export const httpInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DOMAIN}/api`,
  timeout: 10 * 60000,
});
