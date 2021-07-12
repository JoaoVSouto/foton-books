import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import GlobalStyles from 'styles/global';
import light from 'styles/themes/light';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider theme={light}>
        <Component {...pageProps} />

        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
