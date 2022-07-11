import axios from 'axios';
import { getSecondsInMiliseconds } from 'utils/generators';

export const httpInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL_API}`,
  timeout: getSecondsInMiliseconds(60 * 3),
});
