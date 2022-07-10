import { InputExtendType } from 'types/components';

export interface InputTextProps<TFormValues>
  extends InputExtendType<TFormValues> {
  label?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
}
