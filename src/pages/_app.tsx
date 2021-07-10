import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import light from 'styles/themes/light';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
