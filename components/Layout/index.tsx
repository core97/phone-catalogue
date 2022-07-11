import { Container } from 'components/Container';
import { Text } from 'components/Text';
import { Link } from 'components/Link';
import { FlagButton } from 'components/FlagButton';
import { useTranslation } from 'hooks/useTranslation';
import { Routes } from 'types/routes';
import { Language } from 'types/language';
import { LayoutProps } from './Layout.interface';
import styles from './Layout.module.css';

export const Layout = ({ children }: LayoutProps) => {
  const { translation } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Container
          size="xl"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href={Routes.HOME}>{translation.layout.navbar.logo}</Link>

          <Link href={Routes.PHONE_CREATION}>
            {translation.layout.navbar.createPhoneBtn}
          </Link>
        </Container>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Container display="flex" justifyContent="space-around">
          {[Language.ES, Language.EN].map(lang => (
            <FlagButton key={lang} language={lang} />
          ))}
        </Container>
        <Text>{translation.layout.footer}</Text>
      </footer>
    </div>
  );
};
