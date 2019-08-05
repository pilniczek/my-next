import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';
import Layout from '../components/Layout';
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-M684KB'
}

class MyApp extends App {
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
