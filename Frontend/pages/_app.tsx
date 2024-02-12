//@ts-nocheck
import type { AppProps } from 'next/app';

import { ThemeProvider } from '../src/context/themeContext';
import { Layout } from '../src/components/index';
import RainAnimation from '../src/components/RainDrop/raindrop.tsx';

export default function App({ Component, pageProps }: AppProps) {

 return (
  <>
   <ThemeProvider>
    <Layout>
     <RainAnimation />
     {/* //@ts-ignore */}
     <Component {...pageProps} />
    </Layout>
   </ThemeProvider>
  </>
 )
}