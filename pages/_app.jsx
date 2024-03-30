import '@/styles/globals.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.GOOGLE_TAG_MANAGER_ID) {
      const tagManagerArgs = {
        gtmId: process.env.GOOGLE_TAG_MANAGER_ID,
      };

      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  return (
    <>
      {/* Add Navbar here */}
      <main>
        <Component {...pageProps} />
      </main>
      {/* Add Footer here */}
    </>
  );
}
