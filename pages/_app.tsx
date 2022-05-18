import { AppProps } from 'next/app';
import { AppWrapper } from '../components/common/appContext';
import '../styles/index.css';
import '../styles/prism-night-owl.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
