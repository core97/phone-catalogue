import { BaseValidatedFormElement } from 'types/components';

export interface Props<TFormValues>
  extends BaseValidatedFormElement<TFormValues> {
  disabled?: boolean;
}
