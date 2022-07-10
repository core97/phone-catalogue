import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export interface ButtonProps {
  children: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isFullWidth?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}
