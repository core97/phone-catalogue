import type { NextPage } from 'next';
import { Container } from 'components/Container';
import { Text } from 'components/Text';
import { PhoneForm } from 'components/Forms/PhoneForm';
import { useTranslation } from 'hooks/useTranslation';

const PhoneCreationPage: NextPage = () => {
  const { translation } = useTranslation();

  return (
    <Container size="xl">
      <Text size="2xl">{translation.pages.phoneForm.creationHeader}</Text>
      <PhoneForm />
    </Container>
  );
};

export default PhoneCreationPage;
