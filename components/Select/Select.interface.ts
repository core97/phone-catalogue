import {
  RegisterOptions,
  UseFormRegister,
  Path,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';
import { SelectOption } from 'types/components';

export interface Props<TFormValues> {
  name: Path<TFormValues>;
  options: SelectOption[];
  defaultValue?: string;
  disabled?: boolean;
  label?: string;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: DeepMap<FieldValues, FieldError>;
};