import { BaseValidatedFormElement } from 'types/components';

export interface Props<TFormValues>
  extends BaseValidatedFormElement<TFormValues> {
  defaultValue?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
}
