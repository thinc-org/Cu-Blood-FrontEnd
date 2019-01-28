import React from 'react'
import Main from '$/main'
import App, { Container } from 'next/app'
import NProgress from "next-nprogress/component"
import NextI18Next from '@/core/i18n'
import redirectTo from '@/core/redirectTo.js'
import cookies from 'next-cookies'
import axios from '@/core/core'

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps({ Component, router, ctx}) {
    let pageProps = {}
    const c = cookies(ctx);

    ctx.req && console.log(ctx.req.headers.cookie, 'req')
    const headers = ctx.req ? {
      cookie: ctx.req.headers.cookie,
    } : undefined;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // if is in user page
    if (ctx.pathname.substring(0,3) === '/u/') {
        var response = await axios.get('https://api-dev.fives.cloud/v0/profile/me', {headers})
          .then(resp => {
              return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken } };
          })
          .catch((err) => {
            redirectTo('/chulaLogin', ctx);
          })
    }

    if (response !== null) { return { response }; }
    else return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <NProgress
          color="#ff0000"
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