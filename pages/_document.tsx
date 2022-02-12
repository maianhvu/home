import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&family=Inter:wght@400;600&family=Space+Mono&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍣</text></svg>"
          />
        </Head>
        <body className="bg-white dark:bg-black text-gray-500 font-mono">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
