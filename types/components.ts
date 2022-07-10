import { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import {
  RegisterOptions,
  UseFormRegister,
  Path,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';

export type SelectOption<T = string> = {
  value: T;
  label: string;
};

export interface BaseValidatedFormElement<TFormValues> {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: DeepMap<FieldValues, FieldError>;
}

export type InputExtendType<TFormValues> =
  BaseValidatedFormElement<TFormValues> &
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'name' | 'type' | 'accept' | 'autoComplete' | 'id'
    >;

export type SelectExtendType<TFormValues> =
  BaseValidatedFormElement<TFormValues> &
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'name' | 'id'>;

export interface AsyncAction {
  action?: () => void;
  redirect?: string;
  toast?: {
    title: string;
  };
}
