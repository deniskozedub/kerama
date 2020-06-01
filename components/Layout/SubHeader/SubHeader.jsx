import React from 'react';
import Button from '../../Button/Button';
import styles from './SubHeader.scss';

const SubHeader = () => (
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
        href="https://telegram.me/discont_kerama_bot"
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

export default SubHeader;
