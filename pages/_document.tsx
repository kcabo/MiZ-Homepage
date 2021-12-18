import Document, { Html, Head, Main, NextScript } from 'next/document';

const isProduction = true;

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {isProduction && (
            <script
              defer
              src='https://static.cloudflareinsights.com/beacon.min.js'
              data-cf-beacon='{"token": "ecd2b75853ff4f85aec1bd4ec6cf8a74"}'
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
