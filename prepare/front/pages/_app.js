import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';
import 'quill/dist/quill.bubble.css';
// import '../sample.css';

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Its My Route</title>
    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
