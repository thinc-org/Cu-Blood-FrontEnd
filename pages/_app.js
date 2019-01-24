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

  static async getInitialProps({ Component, router, ctx }) {

    let pageProps = {}
    const c = cookies(ctx);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    console.log(ctx.pathname.substring(0,3) ,ctx.pathname.substring(0,3) === '/u/', 'pathname')
    // if is in user page
    if (ctx.pathname.substring(0,3) === '/u/') {
      if (typeof c.accessToken === 'undefined' && false) redirectTo('/register', { res: ctx.res, status: 301 })
      else {
        var response = await axios.post('https://api-dev.fives.cloud/api/v1/private/profile/info', {
          accessToken: cookies(ctx).accessToken
          // accessToken: 1
        })
          .then(resp => {
              return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken } };
          })
          .catch((err) => {
            // document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // redirectTo('/register', { res: ctx.res, status: 301 });
          })
      }
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