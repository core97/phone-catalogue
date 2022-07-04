import { useRouter } from 'next/router';
import { useCallback, useState, useRef } from 'react';
import { toast, Id } from 'react-toastify';

type OptionConfiguration = {
  action?: () => void;
  redirect?: string;
  toast?: {
    title: string;
  };
};

export const useAsync = <T = void, P = unknown>(
  asyncFunction: (args: P) => Promise<T>,
  options: {
    success?: OptionConfiguration;
    isLoading?: Omit<OptionConfiguration, 'redirect'>;
    error?: OptionConfiguration;
    finally?: OptionConfiguration;
  } = {
    error: {
      toast: {
        title: 'Lo sentimos, ha ocurrido un error.',
      },
    },
  }
) => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const toastLoadingId = useRef<Id | null>(null);

  const execute = useCallback(
    (args: P) => {
      setStatus('loading');

      if (options.isLoading?.toast?.title) {
        toastLoadingId.current = toast.loading(options.isLoading.toast.title);
      }

      if (options.isLoading?.action) options.isLoading.action();

      setValue(null);
      setError(null);
      return asyncFunction(args)
        .then(response => {
          setValue(response);
          setStatus('success');

          if (options.success?.toast?.title) {
            toast.success(options.success.toast.title);
          }

          if (options.success?.action) options.success.action();

          if (options.success?.redirect) router.push(options.success.redirect);
        })
        .catch(err => {
          setError(err);
          setStatus('error');

          toast.error(options.error?.toast?.title || 'Ha ocurrido un error');

          if (options.error?.action) options.error.action();

          if (options.error?.redirect) router.push(options.error.redirect);
        })
        .finally(() => {
          toast.dismiss(toastLoadingId?.current?.toString());
          if (options.finally?.toast?.title) {
            toast(options.finally.toast.title);
          }

          if (options.finally?.action) options.finally.action();

          if (options.finally?.redirect) router.push(options.finally.redirect);
        });
    },
    [
      asyncFunction,
      options.error,
      options.finally,
      options.isLoading,
      options.success,
      router,
    ]
  );

  return { execute, status, value, error };
};
