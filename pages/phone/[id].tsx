import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'components/Container';
import { AsyncComponent } from 'components/AsyncComponent';
import { PhoneDetail } from 'components/PhoneDetail';
import { usePhoneQuery } from 'hooks/queries';

const PhoneDetailPage: NextPage = () => {
  const router = useRouter();
  const phoneQuery = usePhoneQuery(router.query.id as string);

  return (
    <Container size="lg">
      <Container size="xl">
        <AsyncComponent
          isLoading={phoneQuery.isLoading}
          error={phoneQuery.error}
          data={phoneQuery.data}
          render={data => (
            <PhoneDetail
              color={data.color}
              description={data.description}
              id={data.id}
              imageFileName={data.imageFileName}
              manufacturer={data.manufacturer}
              name={data.name}
              price={data.price}
              processor={data.processor}
              ram={data.ram}
            />
          )}
        />
      </Container>
    </Container>
  );
};

export default PhoneDetailPage;
