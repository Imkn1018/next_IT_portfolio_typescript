import { AppProps } from 'next/app';
import Layout from '../components/templates/layout';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
