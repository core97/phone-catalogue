import { Text } from 'components/Text';
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
  if (isLoading) {
    return (
      <div className={styles['loading-wrapper']}>
        <Text size="lg" fontWeight="semibold">
          {loadingMessage || 'Cargando...'}
        </Text>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles['error-wrapper']}>
        <Text size="lg">
          {errorMessage || 'Lo sentimos ha ocurrido un error'}
        </Text>
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
        <Text>{noDataMessage || 'No se han encontrado resultados'}</Text>
      </div>
    );
  }

  return <>{render(data as NonNullable<T>)}</>;
};
