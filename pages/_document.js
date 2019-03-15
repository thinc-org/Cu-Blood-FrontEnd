import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="manifest" href="/static/icons/site.webmanifest" />
          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#ee3418" />
          <link rel="shortcut icon" href="/static/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="google-site-verification" content="2p3xIPpK6em68IB4u-Qq2J7rlo2sbvolhjNl6PR8VXA" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="โครงการที่รณรงค์ให้นิสิตปัจจุบัน นิสิตเก่า คณาจารย์ และบุคลากร ของ จุฬาลงกรณ์มหาวิทยาลัย ร่วมกันบริจาคโลหิตให้แก่สภากาชาดไทย" />
          <meta name="keywords" content="cu blood, บริจาคเลือด,บริจาคเลือด จุฬา,บริจาคเลือด เข็ม,บริจาคเลือด นานมั้ย,บริจาคเลือด รพ.จุฬา,บริจาคเลือด เวลา,บริจาคเลือด ที่ไหน,บริจาคเลือด กี่ครั้ง" />
          <meta http-Equiv="content-language" content="th,en" />
          <meta name="robots" content="index, follow" />
          <meta http-Equiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}