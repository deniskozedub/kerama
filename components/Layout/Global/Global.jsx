import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SubHeader from '../SubHeader/SubHeader';
import styles from './Global.scss';

const Global = ({ children }) => (
  <>
    <Head>
      <title>Kerama</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {process.env.NODE_ENV !== 'production' && (
      <link
        rel="stylesheet"
        type="text/css"
        href={`/_next/static/css/styles.chunk.css?v=${Date.now()}`}
      />
      )}
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
    </Head>
    <Header />
    <SubHeader />
    <div className={styles.content}>
      {children}
    </div>
    <Footer />
  </>
);

Global.propTypes = {
  children: PropTypes.node,
};

export default Global;
