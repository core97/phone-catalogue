import type { NextPage } from 'next';
import { Container } from 'components/Container';
import { PhoneList } from 'components/PhoneList';
import { Text } from 'components/Text';
import { AsyncComponent } from 'components/AsyncComponent';
import { usePhonesQuery } from 'hooks/queries';

const HomePage: NextPage = () => {
  const phonesQuery = usePhonesQuery();

  return (
    <Container size="xl">
      <AsyncComponent
        isLoading={phonesQuery.isLoading}
        error={phonesQuery.error}
        data={phonesQuery.data}
        render={data => (
          <>
            <Text size="2xl">Lista de móviles</Text>
            <PhoneList
              list={data.map(phone => ({
                id: phone.id,
                image: phone.imageFileName,
                title: phone.name,
              }))}
            />
          </>
        )}
      />
    </Container>
  );
};

export default HomePage;
