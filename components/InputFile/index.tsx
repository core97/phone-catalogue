/* eslint-disable react/jsx-props-no-spreading */
import {
  RegisterOptions,
  UseFormRegister,
  Path,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';

export type Props<TFormValues> = {
  name: Path<TFormValues>;
  disabled?: boolean;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: DeepMap<FieldValues, FieldError>;
};

export const InputFile = <TFormValues extends Record<string, unknown>>({
  name,
  disabled,
  errors,
  register,
  rules,
}: Props<TFormValues>) => (
  <div className={`form-group ${errors?.[name] ? 'form-group--error' : ''}`}>
    <input
      id={name}
      autoComplete="off"
      name={name}
      type="file"
      accept="image/jpg, image/jpeg, image/png"
      disabled={disabled}
      {...(register && register(name, rules))}
    />
    {errors?.[name]?.message && (
      <span role="alert">{errors[name].message}</span>
    )}
  </div>
);
