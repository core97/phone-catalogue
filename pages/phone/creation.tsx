import type { NextPage } from 'next';
import { Container } from 'components/Container';
import { Text } from 'components/Text';
import { PhoneForm } from 'components/Forms/PhoneForm';

const PhoneCreationPage: NextPage = () => (
  <Container size="xl">
    <Text size="2xl">📱☎️ Móvil</Text>
    <PhoneForm />
  </Container>
);

export default PhoneCreationPage;
