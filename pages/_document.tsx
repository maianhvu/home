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
        </Head>
        <body className="bg-white dark:bg-black text-gray-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
