import type { NextPage } from 'next';
import { Container } from 'components/Container';
import { PhoneList } from 'components/PhoneList';
import { Text } from 'components/Text';
import { useTranslation } from 'hooks/useTranslation';

const HomePage: NextPage = () => {
  const { translation } = useTranslation();

  return (
    <Container size="xl">
      <Text size="2xl">{translation.pages.home.header}</Text>
      <PhoneList />
    </Container>
  );
};

export default HomePage;
