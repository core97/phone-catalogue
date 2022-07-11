import { useTranslation } from 'hooks/useTranslation';
import { FlagButtonProps } from './FlagButton.interface';
import { LANGUAGE_IMAGE } from './FlagButton.constant';
import styles from './FlagButton.module.css';

export const FlagButton = ({ language }: FlagButtonProps) => {
  const { onChangeTranslation } = useTranslation();

  const handleClick = () => {
    onChangeTranslation(language);
  };

  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      <img src={LANGUAGE_IMAGE[language]} alt={language} />
    </button>
  );
};
