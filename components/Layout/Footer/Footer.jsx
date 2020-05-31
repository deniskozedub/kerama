import React from 'react';
import Facebook from '../../../public/svg/foundation_social-facebook.svg';
import Instagram from '../../../public/svg/typcn_social-instagram.svg';
import Twitter from '../../../public/svg/typcn_social-twitter.svg';
import CopyRight from '../../../public/svg/ant-design_copyright-circle-outlined.svg';
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
        <div className={styles.links}>
          <a href="/" className={styles.link}>
            <Facebook className={styles.icon} />
          </a>
          <a href="/" className={styles.link}>
            <Instagram className={styles.icon} />
          </a>
          <a href="/" className={styles.link}>
            <Twitter className={styles.icon} />
          </a>
        </div>
        <p className={styles.copyright}>
          <span>
            <CopyRight className={styles.copyIcon} />
            Dсе права защищены.
          </span>
          <span>
            Дизайн сайта:
            <Button
              viewType="simple"
              href="/"
              classNameWrapper={styles.buttonLink}
            >
              FoxDesign
            </Button>
          </span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
