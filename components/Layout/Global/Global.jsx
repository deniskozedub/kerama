import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SubHeader from '../SubHeader/SubHeader';
import styles from './Global.scss';

const Global = ({ children, info }) => (
  <>
    <Head>
      <title>{info.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {process.env.NODE_ENV !== 'production' && (
      <link
        rel="stylesheet"
        type="text/css"
        href={`/_next/static/css/styles.chunk.css?v=${Date.now()}`}
      />
      )}
      <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
    </Head>
    <Header phone={info.phone} />
    <SubHeader link={info.telegram} />
    <div className={styles.content}>
      {children}
    </div>
    <Footer info={info} />
  </>
);

Global.propTypes = {
  children: PropTypes.node,
  info: PropTypes.shape({
    title: PropTypes.string,
    telegram: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default Global;
