import { Container } from 'components/Container';
import { Text } from 'components/Text';
import { Link } from 'components/Link';
import { useTranslation } from 'hooks/useTranslation';
import { Props } from './Layout.interface';
import styles from './Layout.module.css';

export const Layout = ({ children }: Props) => {
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
          <Link href="/">{translation.layout.navbar.logo}</Link>

          <Link href="/phone/creation">
            {translation.layout.navbar.createPhoneBtn}
          </Link>
        </Container>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Text>{translation.layout.footer}</Text>
      </footer>
    </div>
  );
};
