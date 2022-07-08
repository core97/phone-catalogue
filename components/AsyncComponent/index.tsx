import { Text } from 'components/Text';
import { useTranslation } from 'hooks/useTranslation';
import { Props } from './AsynComponent.interface';
import styles from './AsyncComponent.module.css';

export const AsyncComponent = <T extends unknown>({
  data,
  error,
  isLoading,
  render,
  errorMessage,
  loadingMessage,
  noDataMessage,
}: Props<T>) => {
  const { translation } = useTranslation();

  if (isLoading) {
    return (
      <div className={styles['loading-wrapper']}>
        <Text size="lg" fontWeight="semibold">
          {loadingMessage || translation.globalMsg.loading}
        </Text>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles['error-wrapper']}>
        <Text size="lg">{errorMessage || translation.globalMsg.error}</Text>
      </div>
    );
  }

  if (
    ((typeof data !== 'boolean' || typeof data !== 'number') && !data) ||
    (Array.isArray(data) && !data.length) ||
    (typeof data === 'object' &&
      !Object.keys(data as Record<string, unknown>).length)
  ) {
    return (
      <div className={styles['not-found-wrapper']}>
        <Text>{noDataMessage || translation.globalMsg.notFoundResults}</Text>
      </div>
    );
  }

  return <>{render(data as NonNullable<T>)}</>;
};
