import { InputExtendType } from 'types/components';

export interface InputFileProps<TFormValues> extends InputExtendType<TFormValues> {
  disabled?: boolean;
}
