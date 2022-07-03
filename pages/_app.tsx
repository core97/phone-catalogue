/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { Layout } from 'components/Layout';
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
