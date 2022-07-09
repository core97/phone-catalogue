import Image from 'next/image';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { useDeletePhoneMutation } from 'hooks/mutations';
import { useAsync } from 'hooks/useAsync';
import { useTranslation } from 'hooks/useTranslation';
import { Routes } from 'types/routes';
import { Props } from './PhoneDetail.interface';
import styles from './PhoneDetail.module.css';

export const PhoneDetail = ({
  color,
  description,
  id,
  imageFileName,
  manufacturer,
  name,
  price,
  processor,
  ram,
}: Props) => {
  const deletePhoneMutation = useDeletePhoneMutation();
  const { translation } = useTranslation();

  const deletePhone = useAsync(
    async () => {
      await deletePhoneMutation.mutateAsync(id);
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

  return (
    <article className={styles.wrapper}>
      <figure>
        <Image
          src={imageFileName}
          width={500}
          height={500}
          layout="responsive"
        />
      </figure>
      <header>
        <Text as="h4" size="xl" fontWeight="semibold">
          {name}
        </Text>
        <Text>{`${price} €`}</Text>
      </header>
      <main>
        <div>
          <Text size="lg">{translation.phone.fields.description}</Text>
          <Text fontWeight="thin">{description}</Text>
        </div>
        <div>
          <Text size="lg">{translation.globalMsg.features}</Text>
          <div>
            <Text>{`${translation.phone.fields.description}: `}</Text>
            <Text fontWeight="thin">{color}</Text>
          </div>
          <div>
            <Text>{`${translation.phone.fields.manufacturer}: `}</Text>
            <Text fontWeight="thin">{manufacturer}</Text>
          </div>
          <div>
            <Text>{`${translation.phone.fields.processor}: `}</Text>
            <Text fontWeight="thin">{processor}</Text>
          </div>
          <div>
            <Text>{`${translation.phone.fields.ram}: `}</Text>
            <Text fontWeight="thin">{ram.toString()}</Text>
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
