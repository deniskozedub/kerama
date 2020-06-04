import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Global from '../../Layout/Global/Global';
import Popup from '../../Popup/Popup';
import { ThemeContext } from '../../hoc/createContent';
import SliderCustom from '../../Slider/Slider';
import styles from './Home.scss';

const Home = ({ info }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <ThemeContext.Provider value={setIsPopupOpen}>
      <Global info={info}>
        {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen} />}
        <div className={styles.container}>
          <SliderCustom
            setIsPopupOpen={setIsPopupOpen}
            bannerDesktop={info.banners_desktop}
            bannerMobile={info.banners_mobile}
          />
          <p className={styles.descText}>{info.context}</p>
        </div>
      </Global>
    </ThemeContext.Provider>
  );
};

Home.propTypes = {
  info: PropTypes.shape({
    banners_desktop: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    banners_mobile: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    context: PropTypes.string,
  }),
};

export default Home;
