import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img className="G" src={images.G1} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Epicurean Symphony offers a sophisticated and cozy ambiance, with contemporary decor and soft lighting, creating the perfect setting for an unforgettable dining experience.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Initative</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensansw"><p>Name: Farm-to-Table<br />
          description: "We source our ingredients locally to support farmers and ensure the freshest, seasonal produce in our dishes."</p>
          <p>Name:Waste Reduction<br />
          description: "We prioritize reducing food waste through careful portioning, composting, and recycling practices."</p>
          <p>Name: Ocean-Friendly Seafood<br />
          description: "We are committed to serving sustainably sourced seafood to promote the health of our oceans and marine life."</p>
          </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
