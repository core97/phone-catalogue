import type { NextPage } from 'next';
import { Container } from 'components/Container';
import { PhoneList } from 'components/PhoneList';

const HomePage: NextPage = () => (
  <Container size="xl">
    <PhoneList />
  </Container>
);

export default HomePage;
