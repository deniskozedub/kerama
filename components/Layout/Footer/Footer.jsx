import React from 'react';
import PropTypes from 'prop-types';
import Instagram from '../../../public/svg/typcn_social-instagram.svg';
import styles from './Footer.scss';
import IconLogo from '../../../public/svg/Kjuj.svg';

const Footer = ({ info }) => (
  <footer className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <a
          href={`tel:${info.phone}`}
          className={styles.phone}
        >
          {info.phone}
        </a>
        <p className={styles.address}>{info.address}</p>
        <a
          href={`mailto:${info.email}`}
          className={styles.email}
        >
          {info.email}
        </a>
      </div>
      <div className={styles.linksWrapper}>
        <a href={info.instagram}>
          <Instagram className={styles.icon} />
        </a>
      </div>
      <IconLogo className={styles.logo} />
    </div>
  </footer>
);

Footer.propTypes = {
  info: PropTypes.shape({
    phone: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    instagram: PropTypes.string,
  }),
};

export default Footer;
