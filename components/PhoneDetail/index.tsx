import Image from 'next/image';
import { Text } from 'components/Text';
import { Phone } from 'types/models';
import styles from './PhoneDetail.module.css';

type Props = Omit<Phone, 'createdAt'>;

export const PhoneDetail = ({
  color,
  description,
  imageFileName,
  manufacturer,
  name,
  price,
  processor,
  ram,
}: Props) => (
  <article className={styles.wrapper}>
    <figure>
      <Image src={imageFileName} width={500} height={500} layout="responsive" />
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
        <Text fontWeight='thin'>{description}</Text>
      </div>
      <div>
        <Text size="lg">Características</Text>
        <div>
          <Text>Color: </Text>
          <Text fontWeight='thin'>{color}</Text>
        </div>
        <div>
          <Text>Fabricante: </Text>
          <Text fontWeight='thin'>{manufacturer}</Text>
        </div>
        <div>
          <Text>Procesador: </Text>
          <Text fontWeight='thin'>{processor}</Text>
        </div>
        <div>
          <Text>RAM: </Text>
          <Text fontWeight='thin'>{ram.toString()}</Text>
        </div>
      </div>
    </main>
  </article>
);
