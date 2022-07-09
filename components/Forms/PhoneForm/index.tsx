import { useForm } from 'react-hook-form';
import { InputFile } from 'components/InputFile';
import { InputText } from 'components/InputText';
import { Select } from 'components/Select';
import { Button } from 'components/Button';
import { useAsync } from 'hooks/useAsync';
import { useSavePhoneMutation } from 'hooks/mutations';
import { useTranslation } from 'hooks/useTranslation';
import { uploadFile } from 'services/file';
import { generateId } from 'utils/generators';
import { Manufacter, PhoneColor } from 'types/models';
import { Routes } from 'types/routes';
import { manufacturerOptions, colorsOptions } from './PhoneForm.options';
import { PhoneFormFields } from './PhoneForm.fields';
import styles from './PhoneForm.module.css';

export const PhoneForm = () => {
  const { register, formState, handleSubmit } = useForm<PhoneFormFields>();
  const phoneMutation = useSavePhoneMutation();
  const { translation } = useTranslation();
  const { phone: formTranslations } = translation.forms;
  const { fields: fieldsTranslations } = translation.phone;

  const onSubmit = useAsync(
    async (data: PhoneFormFields) => {
      const filesToUpload = Array.from(data.imageFileName);
      const { files } = await uploadFile(filesToUpload);

      await phoneMutation.mutateAsync({
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
    },
    {
      isLoading: {
        toast: {
          title: formTranslations.loadingCreation,
        },
      },
      success: {
        toast: {
          title: formTranslations.successCreation,
        },
        redirect: Routes.HOME,
      },
    }
  );

  return (
    <form onSubmit={handleSubmit(onSubmit.execute)} className={styles.wrapper}>
      <InputFile
        name="imageFileName"
        register={register}
        rules={{ required: true }}
        errors={formState.errors}
      />
      <InputText
        name="name"
        label={fieldsTranslations.name}
        placeholder={formTranslations.placeholders.name}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <InputText
        name="description"
        label={fieldsTranslations.description}
        placeholder={formTranslations.placeholders.description}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <InputText
        name="price"
        label={fieldsTranslations.price}
        type="number"
        placeholder={formTranslations.placeholders.price}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <Select
        name="color"
        label={fieldsTranslations.color}
        options={colorsOptions}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <Select
        name="manufacturer"
        label={fieldsTranslations.manufacturer}
        options={manufacturerOptions}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <InputText
        name="processor"
        label={fieldsTranslations.processor}
        placeholder={formTranslations.placeholders.processor}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <InputText
        name="ram"
        label={fieldsTranslations.ram}
        type="number"
        placeholder={formTranslations.placeholders.ram}
        register={register}
        errors={formState.errors}
        rules={{
          required: true,
        }}
      />
      <div className={styles['submit-btn']}>
        <Button
          type="submit"
          isFullWidth
          isLoading={onSubmit.status === 'loading'}
        >
          {formTranslations.submitCreationBtn}
        </Button>
      </div>
    </form>
  );
};
