import { SelectOption, BaseValidatedFormElement } from 'types/components';

export interface Props<TFormValues>
  extends BaseValidatedFormElement<TFormValues> {
  options: SelectOption[];
  defaultValue?: string;
  disabled?: boolean;
  label?: string;
}
