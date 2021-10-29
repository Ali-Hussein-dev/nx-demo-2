import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>internal-admin!</title>
      </Head>
      <div className="app">
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default CustomApp;
