import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import styles from './SubHeader.scss';

const SubHeader = ({ link }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <p className={styles.text}>
        Присоединяйтесь к нам в телеграм и
        получайте все самые актуальные акции и
        предложения!
      </p>
      <Button
        viewType="telegram"
        classNameWrapper={styles.buttonWrapper}
        href={link}
      >
        телеграм бот
        <img
          src="/images/telegram.png"
          className={styles.image}
          alt="telegram"
        />
      </Button>
    </div>
  </div>
);

SubHeader.propTypes = {
  link: PropTypes.string,
};

export default SubHeader;
