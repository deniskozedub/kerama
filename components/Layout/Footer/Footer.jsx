import React from 'react';
import Twitter from '../../../public/svg/typcn_social-twitter.svg';
import Button from '../../Button/Button';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <p className={styles.phone}>+375(29) 675-78-56</p>
        <p className={styles.address}>адресс</p>
        <p className={styles.email}>почта</p>
      </div>
      <div className={styles.linksWrapper}>
        <a href="/">
          <Twitter className={styles.icon} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
