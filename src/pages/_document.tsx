import { siteMeta } from '@/lib/constants'
import { Html, Head, Main, NextScript } from 'next/document'

const {siteLang} = siteMeta

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Kameron:wght@400;700&family=Merriweather:ital,wght@1,300&family=Noto+Sans+JP:wght@500&family=Noto+Serif+JP:wght@500&family=Roboto:ital@0;1&display=swap" rel="stylesheet"
      />
      <body></body>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
