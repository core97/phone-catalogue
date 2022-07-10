/* eslint-disable react/jsx-props-no-spreading */
import { InputFileProps } from './InputFile.interface';

export const InputFile = <TFormValues extends Record<string, unknown>>({
  errors,
  register,
  rules,
  ...rest
}: InputFileProps<TFormValues>) => (
  <div
    className={`form-group ${errors?.[rest.name] ? 'form-group--error' : ''}`}
  >
    <input
      {...rest}
      id={rest.name}
      autoComplete="off"
      type="file"
      accept="image/jpg, image/jpeg, image/png"
      {...(register && register(rest.name, rules))}
    />
    {errors?.[rest.name]?.message && (
      <span role="alert">{errors[rest.name].message}</span>
    )}
  </div>
);
