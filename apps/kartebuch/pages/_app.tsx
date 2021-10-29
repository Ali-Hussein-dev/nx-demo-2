import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to kartebuch!</title>
      </Head>
      <div>
        <header className="flex">
          <h1>Welcome to kartebuch!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
