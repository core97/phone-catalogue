/* eslint-disable react/jsx-props-no-spreading */
import { InputTextProps } from './InputText.interface';

export const InputText = <TFormValues extends Record<string, unknown>>({
  errors,
  label,
  register,
  rules,
  type = 'text',
  ...rest
}: InputTextProps<TFormValues>) => (
  <div
    className={`form-group ${errors?.[rest.name] ? 'form-group--error' : ''}`}
  >
    {label && (
      <label htmlFor={rest.name}>
        {rules?.required && <span>*</span>}
        {label}
      </label>
    )}
    <input
      {...rest}
      id={rest.name}
      autoComplete="off"
      type={type}
      {...(register && register(rest.name, rules))}
    />
    {errors?.[rest.name]?.message && (
      <span role="alert">{errors[rest.name].message}</span>
    )}
  </div>
);
