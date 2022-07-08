import es from 'locales/es';

export enum Language {
  ES = 'es',
  EN = 'en',
}

/**
 * Set "es" as type because is default language
 */
export type TranslatedTexts = typeof es;
