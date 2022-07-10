export interface AsyncComponentProps<T> {
  data: T;
  error: unknown;
  isLoading: boolean;
  render: (successData: NonNullable<T>) => React.ReactNode | React.ReactNode[];
  errorMessage?: string;
  loadingMessage?: string;
  noDataMessage?: string;
}
