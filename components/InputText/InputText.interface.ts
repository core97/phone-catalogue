import {
  RegisterOptions,
  UseFormRegister,
  DeepMap,
  FieldValues,
  FieldError,
  Path,
} from 'react-hook-form';

export interface Props<TFormValues> {
  name: Path<TFormValues>;
  defaultValue?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: DeepMap<FieldValues, FieldError>;
}
