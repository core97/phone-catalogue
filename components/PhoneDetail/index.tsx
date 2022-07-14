import Image from 'next/image';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { usePhoneQuery } from 'hooks/queries';
import { useDeletePhoneMutation } from 'hooks/mutations';
import { useAsync } from 'hooks/useAsync';
import { useTranslation } from 'hooks/useTranslation';
import { Routes } from 'types/routes';
import { PhoneDetailProps } from './PhoneDetail.interface';
import styles from './PhoneDetail.module.css';

export const PhoneDetail = ({ id }: PhoneDetailProps) => {
  const phoneQuery = usePhoneQuery(id);
  const deletePhoneMutation = useDeletePhoneMutation();
  const { translation } = useTranslation();

  const deletePhone = useAsync(
    async () => {
      if (phoneQuery.data) {
        await deletePhoneMutation.mutateAsync(phoneQuery.data.id);
      }
    },
    {
      isLoading: {
        toast: {
          title: translation.phone.messages.deletionLoading,
        },
      },
      success: {
        toast: {
          title: translation.phone.messages.deletionSuccess,
        },
        redirect: Routes.HOME,
      },
    }
  );

  if (phoneQuery.isLoading) {
    return <Text>{translation.globalMsg.loading}</Text>;
  }

  if (!phoneQuery.data) {
    return <Text>{translation.globalMsg.notFoundResults}</Text>;
  }

  return (
    <article className={styles.wrapper}>
      <figure>
        <Image
          src={phoneQuery.data.imageFileName}
          width={500}
          height={500}
          layout="responsive"
        />
      </figure>
      <header>
        <Text as="h4" size="xl" fontWeight="semibold">
          {phoneQuery.data.name}
        </Text>
        <Text>{`${phoneQuery.data.price} €`}</Text>
      </header>
      <main>
        <div>
          <Text size="lg">{translation.phone.fields.description}</Text>
          <Text fontWeight="thin">{phoneQuery.data.description}</Text>
        </div>
        <div>
          <Text size="lg">{translation.globalMsg.features}</Text>
          <div>
            <Text>{`${translation.phone.fields.description}: `}</Text>
            <Text fontWeight="thin">{phoneQuery.data.color}</Text>
          </div>
          <div>
            <Text>{`${translation.phone.fields.manufacturer}: `}</Text>
            <Text fontWeight="thin">{phoneQuery.data.manufacturer}</Text>
          </div>
          <div>
            <Text>{`${translation.phone.fields.processor}: `}</Text>
            <Text fontWeight="thin">{phoneQuery.data.processor}</Text>
          </div>
          <div>
            <Text>{`${translation.phone.fields.ram}: `}</Text>
            <Text fontWeight="thin">{phoneQuery.data.ram.toString()}</Text>
          </div>
        </div>
      </main>
      <footer>
        <Button
          type="button"
          onClick={deletePhone.execute}
          isFullWidth
          isLoading={deletePhone.status === 'loading'}
        >
          {translation.phone.messages.deleteBtn}
        </Button>
      </footer>
    </article>
  );
};
