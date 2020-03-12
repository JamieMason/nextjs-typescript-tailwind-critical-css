import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/global.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
