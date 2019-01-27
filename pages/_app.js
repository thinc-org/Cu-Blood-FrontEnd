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

  static async getInitialProps({ Component, router, ctx, res}) {
    let pageProps = {}
    const c = cookies(ctx);

    // if (Component.getInitialProps) {
    //   pageProps = await Component.getInitialProps(ctx)
    // }
    // // if is in user page
    // if (ctx.pathname.substring(0,3) === '/u/') {
    //   if (typeof c.accessToken === 'undefined') redirectTo('/chulaLogin', ctx)
    //   else {
    //     var response = await axios.post('https://api-dev.fives.cloud/v0/users/verify', {
    //       accessToken: cookies(ctx).accessToken
    //     })
    //       .then(resp => {
    //           return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken } };
    //       })
    //       .catch((err) => {
    //         document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //         redirectTo('/chulaLogin', ctx);
    //       })
    //   }
    // }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // if is in user page
    if (ctx.pathname.substring(0,3) === '/u/') {
        var response = await axios.get('https://api-dev.fives.cloud/v0/profile/me')
          .then(resp => {
              // console.log(resp)
              return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken } };
          })
          .catch((err) => {
            // console.log(err)
            // return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken } };
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