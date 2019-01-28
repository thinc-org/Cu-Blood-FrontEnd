import React, { Component } from 'react'
import Main from '$/main'
import App, { Container } from 'next/app'
import NProgress from "next-nprogress/component"
import NextI18Next from '@/core/i18n'
import redirectTo from '@/core/redirectTo.js'
import cookies from 'next-cookies'
import axios from '@/core/core'
import UserInfoProvider, { UserInfoConsumer } from '../components/core/UserInfoProvider';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    const c = cookies(ctx);

    const headers = ctx.req ? {
      cookie: ctx.req.headers.cookie,
    } : undefined;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    console.log(ctx.res, 'ctx.res')
    // if is in user page
    if (ctx.pathname.substring(0, 3) === '/u/') {
      var response = await axios.get('https://api-dev.fives.cloud/v0/profile/me', { headers })
        .then(resp => {
          return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken, userInfo: resp.data.result, status: resp.status } };
        })
        .catch((err) => {
          return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken, status: err.response.status } };
        })
    } else if (ctx.res) {
      var response = await axios.get('https://api-dev.fives.cloud/v0/profile/me', { headers })
        .then(resp => {
          return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken, userInfo: resp.data.result, status: resp.status } };
        })
        .catch((err) => {
          return { pageProps };
        })
    }

    if (response !== null) { return { response }; }
    else return { pageProps };
  }

  render() {
    const { Component, pageProps, response } = this.props
    if (response && response.status == 401) {
      return (
        <Container>
          <UserInfoProvider>
            <UserInfoConsumer>
              {context => response && <ForceLogout context={context} />}
            </UserInfoConsumer>
          </UserInfoProvider>
        </Container>
      )
    } else {
      return (
        <Container>
          <NProgress
            color="#ff0000"
            spinner={false}
          />
          <UserInfoProvider>
            <UserInfoConsumer>
              {context => response && <AddUserInfo context={context} userInfo={response.userInfo} />}
            </UserInfoConsumer>
            <Main {...pageProps}>
              <Component {...pageProps} />
            </Main>
          </UserInfoProvider>
        </Container>
      )
    }
  }
}


// hack from stackoverflow 
class AddUserInfo extends Component {

  componentDidMount() {
    const { userInfo, context } = this.props;
    context.addUserInfo(userInfo);
  }

  render() {
    return null
  }
}

// hack from stackoverflow
class ForceLogout extends Component {

  componentDidMount() {
    const { context } = this.props;
    context.logout(true);
    redirectTo('/chulaLogin');
  }

  render() {
    return null
  }
}

export default NextI18Next.appWithTranslation(MyApp);