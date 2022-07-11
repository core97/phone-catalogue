import { Language } from 'types/language';

const ROUTE_BASE = '/flags';

export const LANGUAGE_IMAGE: { [key in Language]: string } = {
  en: `${ROUTE_BASE}/reino-unido.svg`,
  es: `${ROUTE_BASE}/espana.svg`,
};
