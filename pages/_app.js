import Navbar from '@/src/components/Navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
