//@ts-nocheck
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { Layout } from '../src/components/index';
import RainAnimation from '../src/components/RainDrop/raindrop.tsx';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <RainAnimation />
        {/* //@ts-ignore */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}