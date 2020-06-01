import React, { useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconArrow from '../../public/svg/Polygon.svg';
import Button from '../Button/Button';
import styles from './Slider.scss';

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

const SliderCustom = ({ setIsPopupOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
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
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
        <div className={styles.sliderFirst} />
        <div className={styles.sliderSecond} />
        <div className={styles.sliderThird} />
      </Slider>
      <Button
        viewType="orange"
        classNameWrapper={styles.sliderButton}
        onClick={() => setIsPopupOpen(true)}
      >
        получить консультацию
      </Button>
    </div>
  );
};

SliderCustom.propTypes = {
  setIsPopupOpen: PropTypes.func,
};

export default SliderCustom;

