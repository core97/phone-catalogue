import Link from 'next/link';
import { Container } from 'components/Container';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { useTranslation } from 'hooks/useTranslation';
import { Props } from './Layout.interface';
import styles from './Layout.module.css';

export const Layout = ({ children }: Props) => {
  const { translation } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Container
          size="2xl"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/">
            <a>
              <Text as="h1" size="lg">
                {translation.layout.navbar.logo}
              </Text>
            </a>
          </Link>

          <Button as="link" link="/phone/creation">
            {translation.layout.navbar.createPhoneBtn}
          </Button>
        </Container>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Text>{translation.layout.footer}</Text>
      </footer>
    </div>
  );
};
