import React, { useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconArrow from '../../../public/svg/Polygon.svg';
import Global from '../../Layout/Global/Global';
import Button from '../../Button/Button';
import Popup from '../../Popup/Popup';
import { withResponse } from '../../hoc/withResponsive';
import styles from './Home.scss';

const ArrowSlider = ({ className, onClick, direction }) => {
  const classNameForButton = cx(cx(styles.buttonSlider, className), {
    [styles.buttonRight]: direction === 'right',
    [styles.buttonLeft]: direction === 'left',
  });

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNameForButton}
    >
      <IconArrow className={styles.sliderIcon} />
    </button>
  );
};

const Home = ({ isDesktopScreen }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    nextArrow: <ArrowSlider direction="right" />,
    prevArrow: <ArrowSlider direction="left" />,
    pauseOnHover: true,
    beforeChange: (prev, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <button
        type="button"
        className={cx(styles.dot, {
          [styles.dotActive]: i === currentSlide,
        })}
      />
    ),
    dotsClass: styles.dots,
  };

  return (
    <Global>
      {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen} />}
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            <div className={styles.sliderFirst}>
              <h3 className={styles.slideFirstTitle}>
                Только в этом месяце ,<br /> при покупке от
                <span className={styles.activeText}> 100 кв м</span> , скидка
                <span className={styles.activeText}> -15%</span>
                {isDesktopScreen && <br />} на следующий заказ
              </h3>
              <Button
                viewType="orange"
                classNameWrapper={styles.sliderFirstButton}
                onClick={() => setIsPopupOpen(true)}
              >
                получить консультацию
              </Button>
            </div>
            <div className={styles.sliderSecond}>
              <h1 className={styles.slideSecondTitle}>
                Новым клиентам <br />
                <span className={styles.mobileDiscount}>скидка</span> {!isDesktopScreen && <br />}
                <span className={styles.activeTextSecond}>-10%</span>
              </h1>
              <Button
                viewType="orange"
                classNameWrapper={styles.sliderSecondButton}
                onClick={() => setIsPopupOpen(true)}
              >
                получить консультацию
              </Button>
            </div>
            <div className={styles.sliderThird}>
              <h2 className={styles.slideThirdTitle}>
                Действует <br />
                <span className={styles.activeTextThird}>дисконтная программа</span> <br />
                для постоянных клиентов
              </h2>
              <Button
                viewType="orange"
                classNameWrapper={styles.sliderThirdButton}
                onClick={() => setIsPopupOpen(true)}
              >
                получить консультацию
              </Button>
            </div>
          </Slider>
        </div>
        <p className={styles.descText}>
          тут будет текст, рассказывающий о фирме, для общего
          ознакомления. а лучше три преимущества просто показать,
          это будет и эстетичнее и полезнее для пользователя. тут
          будет текст, рассказывающий о фирме, для общего ознакомления.
          а лучше три преимущества просто показать, это будет и эстетичнее
          и полезнее для пользователя.тут будет текст, рассказывающий о фирме
          , для общего ознакомления.
        </p>
      </div>
    </Global>
  );
};

Home.propTypes = {
  isDesktopScreen: PropTypes.bool,
};

export default withResponse(Home);
