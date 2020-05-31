import React from 'react';
import Button from '../../Button/Button';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <img src="/images/logo.png" alt="logo" />
      <div className={styles.infoWrapper}>
        <a href="/" className={styles.phone}>+375(29) 675-78-56</a>
        <Button viewType="simple" type="button">
          заказать звонок
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
