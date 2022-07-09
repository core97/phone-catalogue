export interface Props {
  children: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (...args: any[]) => void;
  isFullWidth?: boolean;
  type?: 'submit' | 'reset' | 'button';
}
