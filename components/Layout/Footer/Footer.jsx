import React from 'react';
import Instagram from '../../../public/svg/typcn_social-instagram.svg';
import Button from '../../Button/Button';
import styles from './Footer.scss';

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
    </div>
  </footer>
);

export default Footer;
