import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  <MainLayout/>
  return <Component {...pageProps} />;
}

export default MyApp;
