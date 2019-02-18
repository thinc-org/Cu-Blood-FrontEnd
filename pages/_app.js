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

    // although the result / performance is 100% coherent to the userflow journey, I know this code itself is very boilerplate.
    // Will fix that if we have enough time.
    let response;
    // if is in user page
    if (ctx.pathname.includes('/u/')) {
      response = await axios.get('/profile/me', { headers })
        .then(resp => { // add userinfo to context
          return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken, userInfo: resp.data.result, status: resp.status } };
        })
        .catch((err) => { // force logout then redirect to same page
          return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken, status: 401 } };
        })
    }
    else if (ctx.pathname.includes('/chulaLogin')) { //
      response = await axios.get('/profile/me', { headers })
        .then(resp => { // redirect if already login
          redirectTo('/', ctx);
        })
        .catch((err) => { // force logout with no redirect
          return null;
        })
    }
    else if (ctx.res) {
      response = await axios.get('/profile/me', { headers })
        .then(resp => { // add userInfo to context when already log in
          return { ...pageProps, ...{ query: ctx.query, authtoken: c.authtoken, userInfo: resp.data.result, status: resp.status } };
        })
        .catch((err) => { // force logout with no redirect
          return null;
        })
    }

    if (response !== null) { return { response }; }
    else return { pageProps };
  }

  render() {
    const { Component, pageProps, response } = this.props
    if (response && response.status === 401) {
      return (
        <Container>
          <UserInfoProvider>
            <UserInfoConsumer>
              {context => <ForceLogout context={context} />}
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
              {context => response ? <AddUserInfo key={JSON.stringify(context.userInfo) === JSON.stringify(response.userInfo) ? 0 : 1} context={context} userInfo={response.userInfo} /> : context.isLogin === null && <ForceLogout context={context} noRedirect={true} />}
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
    context.deleteUserContext();
    context.logout(false);
    if (!this.props.noRedirect) {
      redirectTo('/chulaLogin')
    };
  }

  render() {
    return null
  }
}

export default NextI18Next.appWithTranslation(MyApp);