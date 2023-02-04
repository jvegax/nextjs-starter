import theme from '@/theme';
import '@/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
