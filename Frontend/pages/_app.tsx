import type { AppProps } from 'next/app';

import { Layout } from '../src/components/index';
import '../styles/globals.css'
import { Fragment } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Fragment {...pageProps} />
      </Layout>
    </>
  )
}