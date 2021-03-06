import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalProvider } from 'contexts/globalContext'

import ThemeWrapper from 'components/ThemeWrapper'

function App({ Component, pageProps, router }: AppProps) {
  return (
    <GlobalProvider>
      <ThemeWrapper>
        <Head>
          <title>Books</title>
          <link
            rel="shortcut icon"
            type="image/svg+xml"
            href="/images/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            type="image/svg+xml"
            href="/images/favicon.ico"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="" />
          <meta name="theme-color" content="#fafafa" />
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeWrapper>
    </GlobalProvider>
  )
}

export default App
