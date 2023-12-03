import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="pursue the new mesmerizing mouth watering taste" />
      <h1 className="app__header-h1">Bon Appétit</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Fine dining is an opulent culinary journey that combines artistic gastronomy with opulent aesthetics in a harmonious way. Expert chefs create elaborate dishes in an elegant setting, and flawless service turns every meal into a celestial adventure. A sophisticated dance of flavour, ambiance, and friendliness turns dining into a sumptuous and luxurious experience.</p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
