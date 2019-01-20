import React from 'react'
import Main from '$/main'
import App, { Container } from 'next/app'
import NProgress from "next-nprogress/component"
import NextI18Next from '@/core/i18n'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <NProgress
          color="#CF2334"
          spinner={false}
        />
        <Main {...pageProps}>
         <Component {...pageProps} />
        </Main>
      </Container>
    )
  }
}

export default NextI18Next.appWithTranslation(MyApp);