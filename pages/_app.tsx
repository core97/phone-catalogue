/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'components/Layout';
import { getSecondsInMiliseconds } from 'utils/generators';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';
import 'styles/theme.css';
import 'styles/colors.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            staleTime: getSecondsInMiliseconds(60),
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer position="bottom-center" />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
