import { Container } from 'components/Container';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import styles from './Layout.module.css';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const Layout = ({ children }: Props) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Container
        size="2xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text as='h1' size="lg">Catálogo</Text>
        <Button as='link' link='/phone/creation'>
          Crear teléfono
        </Button>
      </Container>
    </header>
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <Text>Code challenge by Juan Cortés ✌️</Text>
    </footer>
  </div>
);
