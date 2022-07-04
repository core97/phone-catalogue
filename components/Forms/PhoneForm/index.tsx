import { useForm } from 'react-hook-form';
import { InputFile } from 'components/InputFile';
import { InputText } from 'components/InputText';
import { Select } from 'components/Select';
import { Button } from 'components/Button';
import styles from './PhoneForm.module.css';

type PhoneFormFields = {
  color: string;
  description: string;
  imageFileName: FileList;
  manufacturer: string;
  name: string;
  price: number;
  processor: string;
  ram: number;
};

export const PhoneForm = () => {
  const { register, formState, handleSubmit } = useForm<PhoneFormFields>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className={styles.wrapper}>
      <InputFile
        name="imageFileName"
        register={register}
        rules={{ required: true }}
        errors={formState.errors}
      />
      <InputText
        name="name"
        label="Nombre"
        placeholder="Samsung Galaxy S9"
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <InputText
        name="description"
        label="Descripción"
        placeholder="Lorem ipsum"
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <InputText
        name="price"
        label="Precio"
        type='number'
        placeholder="499"
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <Select
        name="color"
        label="Color"
        options={[
          { label: 'Negro', value: 'black' },
          { label: 'Azul oscuro', value: 'dark-blue' },
        ]}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <Select
        name="manufacturer"
        label="Fabricante"
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Samsung', value: 'samsung' },
        ]}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <InputText
        name="processor"
        label="Procesador"
        placeholder="Qualcon"
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <InputText
        name="ram"
        label="RAM"
        type='number'
        placeholder="8"
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <div className={styles['submit-btn']}>
        <Button as="button" type="submit" isFullWidth>
          Crear móvil
        </Button>
      </div>
    </form>
  );
};
