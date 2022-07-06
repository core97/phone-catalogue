export interface Props<T> {
  data: T;
  error: unknown;
  isLoading: boolean;
  render: (successData: NonNullable<T>) => void;
  errorMessage?: string;
  loadingMessage?: string;
  noDataMessage?: string;
}
