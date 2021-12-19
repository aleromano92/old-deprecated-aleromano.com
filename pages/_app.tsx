import { AppProps } from 'next/app';
import { AppWrapper } from '../components/common/appContext';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
