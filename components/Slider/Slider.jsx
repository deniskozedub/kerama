import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconArrow from '../../public/svg/Polygon.svg';
import Button from '../Button/Button';
import { withResponse } from '../hoc/withResponsive';
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

const SliderCustom = ({
  setIsPopupOpen, bannerDesktop, bannerMobile, isDesktopScreen,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [appropriateArray, setAppropriateArray] = useState(null);

  useEffect(() => {
    const array = window.innerWidth > 768 && bannerDesktop[0] || bannerMobile[0];
    setAppropriateArray(array);
  }, []);

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
        {appropriateArray && appropriateArray.map((item, index) => (
          <div key={index + 1} className={styles.slideWrapper}>
            <img
              className={styles.slide}
              src={item}
              alt="slide"
            />
          </div>
        ))}
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
  bannerDesktop: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  bannerMobile: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  isDesktopScreen: PropTypes.bool,
};

export default withResponse(SliderCustom);
