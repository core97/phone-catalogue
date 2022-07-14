import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'components/Container';
import { PhoneDetail } from 'components/PhoneDetail';

const PhoneDetailPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Container size="lg">
      <PhoneDetail id={Array.isArray(query.id) ? query.id[0] : query.id} />
    </Container>
  );
};

export default PhoneDetailPage;
