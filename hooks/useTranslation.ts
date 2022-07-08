import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import es from 'locales/es';
import { TRANSLATIONS_BY_LANGUAGE } from 'utils/translations-constant';
import { Language } from 'types/language';

export function useTranslation() {
  const router = useRouter();
  const { locale } = router;
  const [translation, setTranslation] = useState(es);

  const onChangeTranslation = useCallback(
    (newLang: Language) => {
      router.push(router.pathname, router.asPath, { locale: newLang });
    },
    [router]
  );

  useEffect(() => {
    if (locale && ([Language.EN, Language.ES] as string[]).includes(locale)) {
      setTranslation(TRANSLATIONS_BY_LANGUAGE[locale as Language]);
    }
  }, [locale]);

  return {
    translation,
    onChangeTranslation,
  };
}
