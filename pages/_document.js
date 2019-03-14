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
        <link rel="icon" href="/static/icons/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="โครงการที่รณรงค์ให้นิสิตปัจจุบัน นิสิตเก่า คณาจารย์ และบุคลากร ของ จุฬาลงกรณ์มหาวิทยาลัย ร่วมกันบริจาคโลหิตให้แก่สภากาชาดไทย" />
        <meta name="keywords" content="บริจาคเลือด,บริจาคเลือด จุฬา,บริจาคเลือด เข็ม,บริจาคเลือด นานมั้ย,บริจาคเลือด รพ.จุฬา,บริจาคเลือด เวลา,บริจาคเลือด ที่ไหน,บริจาคเลือด กี่ครั้ง" />
        <meta http-equiv="content-language" content="th,en" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}