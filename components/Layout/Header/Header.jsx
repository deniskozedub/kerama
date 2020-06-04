import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import { ThemeContext } from '../../hoc/createContent';
import IconLogo from '../../../public/svg/Kjuj.svg';
import styles from './Header.scss';

const Header = ({ phone }) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <IconLogo className={styles.logo} />
      <div className={styles.infoWrapper}>
        <a href={`tel:${phone}`} className={styles.phone}>{phone}</a>
        <ThemeContext.Consumer>
          {(value) => (
            <Button viewType="simple" type="button" onClick={value}>
              заказать звонок
            </Button>
          )}
        </ThemeContext.Consumer>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  phone: PropTypes.string,
};

export default Header;
