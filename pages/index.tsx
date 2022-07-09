import type { NextPage } from 'next';
import { Container } from 'components/Container';
import { PhoneList } from 'components/PhoneList';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { AsyncComponent } from 'components/AsyncComponent';
import { usePhonesQuery } from 'hooks/queries';
import { useTranslation } from 'hooks/useTranslation';
import { Language } from 'types/language';

const HomePage: NextPage = () => {
  const phonesQuery = usePhonesQuery();
  const { onChangeTranslation, translation } = useTranslation();

  return (
    <Container size="xl">
      <Container display="flex" justifyContent="space-around">
        {[Language.ES, Language.EN].map(lang => (
          <Button key={lang} onClick={() => onChangeTranslation(lang)}>
            {lang}
          </Button>
        ))}
      </Container>
      <AsyncComponent
        isLoading={phonesQuery.isLoading}
        error={phonesQuery.error}
        data={phonesQuery.data}
        render={data => (
          <>
            <Text size="2xl">{translation.pages.home.header}</Text>
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
