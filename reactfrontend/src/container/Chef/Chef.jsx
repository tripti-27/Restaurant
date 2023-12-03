import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">An internationally renowned chef with a flair for creating culinary masterpieces that transcend borders.</p>
          
        </div>
        <p className="p__opensans">signature_dish: "Mango Tango Fusion" </p>
      </div>

      <div className="app__chef-sign">
        <p>Isabella Culinary Maestro</p>
        <p className="p__opensans">Chef </p>
      </div>
    </div>
  </div>
);

export default Chef;
