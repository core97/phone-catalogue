/* eslint-disable react/jsx-props-no-spreading */
import { Props } from './Select.interface';

export const Select = <TFormValues extends Record<string, unknown>>({
  name,
  options,
  defaultValue,
  disabled,
  errors,
  label,
  register,
  rules,
}: Props<TFormValues>) => (
  <div className={`form-group ${errors?.[name] ? 'form-group--error' : ''}`}>
    {label && (
      <label htmlFor={name}>
        {rules?.required && <span>*</span>}
        {label}
      </label>
    )}
    <select
      name="select"
      disabled={disabled}
      defaultValue={defaultValue}
      {...(register && register(name, rules))}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {errors?.[name]?.message && (
      <span role="alert">{errors[name].message}</span>
    )}
  </div>
);
