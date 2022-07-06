import Image from 'next/image';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { useDeletePhoneMutation } from 'hooks/mutatations';
import { useAsync } from 'hooks/useAsync';
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

  const deletePhone = useAsync(
    async () => {
      await deletePhoneMutation.mutateAsync(id);
    },
    {
      isLoading: {
        toast: {
          title: 'Espere, estamos borrando el teléfono',
        },
      },
      success: {
        toast: {
          title: 'El teléfomo se ha borrado correctamente',
        },
        redirect: '/',
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
          <Text size="lg">Descripción</Text>
          <Text fontWeight="thin">{description}</Text>
        </div>
        <div>
          <Text size="lg">Características</Text>
          <div>
            <Text>Color: </Text>
            <Text fontWeight="thin">{color}</Text>
          </div>
          <div>
            <Text>Fabricante: </Text>
            <Text fontWeight="thin">{manufacturer}</Text>
          </div>
          <div>
            <Text>Procesador: </Text>
            <Text fontWeight="thin">{processor}</Text>
          </div>
          <div>
            <Text>RAM: </Text>
            <Text fontWeight="thin">{ram.toString()}</Text>
          </div>
        </div>
      </main>
      <footer>
        <Button
          as="button"
          type="button"
          onClick={deletePhone.execute}
          isFullWidth
          isLoading={deletePhone.status === 'loading'}
        >
          Borrar teléfono
        </Button>
      </footer>
    </article>
  );
};
