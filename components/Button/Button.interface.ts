/* type ClickableProps = {
  as: 'button';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (...args: any[]) => void;
  type?: 'submit' | 'reset' | 'button';
};

type LinkProps = { as: 'link'; link: string };

type Props = {
  children: string;
  isFullWidth?: boolean;
} & (ClickableProps | LinkProps); */

interface ButtonBaseProps {
  children: string;
  isFullWidth?: boolean;
}

export interface LinkProps extends ButtonBaseProps {
  as: 'link';
  link: string;
}

export interface ClickableProps extends ButtonBaseProps {
  as: 'button';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (...args: any[]) => void;
  type?: 'submit' | 'reset' | 'button';
}
