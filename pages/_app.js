import '@/styles/globals.css'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const tagManagerArgs = {
    gtmId: process.env.GOOGLE_TAG_MANAGER_ID,
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
