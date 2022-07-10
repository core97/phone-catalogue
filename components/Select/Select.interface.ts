import { SelectOption, SelectExtendType } from 'types/components';

export interface SelectProps<TFormValues>
  extends SelectExtendType<TFormValues> {
  options: SelectOption[];
  label?: string;
}
