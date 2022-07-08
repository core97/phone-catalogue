import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'components/Container';
import { AsyncComponent } from 'components/AsyncComponent';
import { PhoneDetail } from 'components/PhoneDetail';
import { usePhoneQuery } from 'hooks/queries';

const PhoneDetailPage: NextPage = () => {
  const { query } = useRouter();
  const phoneQuery = usePhoneQuery(
    typeof query.id === 'string' ? query.id : undefined
  );

  return (
    <Container size="lg">
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
  );
};

export default PhoneDetailPage;
