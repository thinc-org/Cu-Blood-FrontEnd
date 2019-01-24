import React from 'react'
import Main from '$/main'
import App, { Container } from 'next/app'
import NProgress from "next-nprogress/component"
import NextI18Next from '@/core/i18n'
import redirectTo from '@/core/redirectTo.js'
import cookies from 'next-cookies'
import axios from '@/core/core'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    const c = cookies(ctx);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // console.log(ctx.pathname ,ctx.pathname.includes('/u/'), 'pathname')
    // if is in user page
    if (ctx.pathname.includes('/u/') || true) {
      console.log('true?')
      if (typeof c.accessToken === 'undefined' && false) redirectTo('/', { res: ctx.res, status: 301 })
      //if on another page return to login
      else {
        var response = await axios.post('https://api-dev.fives.cloud/api/v1/private/profile/info', {
          // accessToken: cookies(ctx).accessToken
          accessToken: 1
        })
          .then(resp => {
            if (ctx.pathname == "/register") {
              console.log('register')
              // if(document) document.cookie = "accessToken=1; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                redirectTo('/about', { res: ctx.res, status: 301 });
            }

            else {
              //if auth check was successful, stay where we are
              return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken } };
            }

          })
          .catch((err) => {
            // if(document) document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            return { pageProps }; 
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