/* eslint-disable react/jsx-props-no-spreading */
import { Props } from './InputText.interface';

export const InputText = <TFormValues extends Record<string, unknown>>({
  name,
  defaultValue,
  disabled,
  errors,
  label,
  placeholder,
  register,
  rules,
  type = 'text',
}: Props<TFormValues>) => (
  <div className={`form-group ${errors?.[name] ? 'form-group--error' : ''}`}>
    {label && (
      <label htmlFor={name}>
        {rules?.required && <span>*</span>}
        {label}
      </label>
    )}
    <input
      id={name}
      autoComplete="off"
      name={name}
      type={type}
      disabled={disabled}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...(register && register(name, rules))}
    />
    {errors?.[name]?.message && (
      <span role="alert">{errors[name].message}</span>
    )}
  </div>
);
