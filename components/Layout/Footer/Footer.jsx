import React from 'react';
import Instagram from '../../../public/svg/typcn_social-instagram.svg';
import styles from './Footer.scss';
import IconLogo from '../../../public/svg/Kjuj.svg';

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <p className={styles.phone}>+375(29) 675-78-56</p>
        <p className={styles.address}>г. Днепр, ул. Центральная</p>
        <p className={styles.email}>discont-kerama@gmail.com</p>
      </div>
      <div className={styles.linksWrapper}>
        <a href="/">
          <Instagram className={styles.icon} />
        </a>
      </div>
      <IconLogo className={styles.logo} />
    </div>
  </footer>
);

export default Footer;
