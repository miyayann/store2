import Layout from '@/components/template/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as gtag from "../lib/gtag"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: string) => {
      gtag.pageView(url)
    }
      router.events.on('routeChangeComplete', handleRouterChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange)
    }
  },[router.events])
  return (
    <>
    <Script 
      strategy='afterInteractive'
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}/>
    <Script
      id="gtag-init"
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
  
        gtag('config', '${gtag.GA_MEASUREMENT_ID}');
        `,
      }}
      />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
