import { useForm } from 'react-hook-form';
import { InputFile } from 'components/InputFile';
import { InputText } from 'components/InputText';
import { Select } from 'components/Select';
import { Button } from 'components/Button';
import { uploadFile } from 'services/file';
import { savePhone } from 'services/phone';
import { generateId } from 'utils/generators';
import { Manufacter, PhoneColor } from 'types/models';
import { manufacturerOptions, colorsOptions } from './PhoneForm.options';
import { PhoneFormFields } from './PhoneForm.fields';
import styles from './PhoneForm.module.css';

export const PhoneForm = () => {
  const { register, formState, handleSubmit } = useForm<PhoneFormFields>();

  const onSubmit = handleSubmit(async data => {
    const filesToUpload = Array.from(data.imageFileName);
    const { files } = await uploadFile(filesToUpload);

    await savePhone({
      id: generateId(),
      color: data.color as PhoneColor,
      createdAt: new Date(),
      description: data.description,
      imageFileName: files[0],
      manufacturer: data.manufacturer as Manufacter,
      name: data.name,
      price: +data.price,
      processor: data.processor,
      ram: +data.ram,
    });
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
        type="number"
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
        options={colorsOptions}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <Select
        name="manufacturer"
        label="Fabricante"
        options={manufacturerOptions}
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
        type="number"
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
