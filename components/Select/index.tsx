/* eslint-disable react/jsx-props-no-spreading */
import { SelectProps } from './Select.interface';

export const Select = <TFormValues extends Record<string, unknown>>({
  options,
  errors,
  label,
  register,
  rules,
  ...rest
}: SelectProps<TFormValues>) => (
  <div
    className={`form-group ${errors?.[rest.name] ? 'form-group--error' : ''}`}
  >
    {label && (
      <label htmlFor={rest.name}>
        {rules?.required && <span>*</span>}
        {label}
      </label>
    )}
    <select
      {...rest}
      id={rest.name}
      name="select"
      {...(register && register(rest.name, rules))}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {errors?.[rest.name]?.message && (
      <span role="alert">{errors[rest.name].message}</span>
    )}
  </div>
);
