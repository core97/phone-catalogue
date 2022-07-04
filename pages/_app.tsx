/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'components/Layout';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
    <ToastContainer position='bottom-center' />
  </Layout>
);

export default MyApp;
