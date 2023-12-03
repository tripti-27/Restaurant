import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const onlinePresence = {
    website: 'https://www.epicureansymphony.com',
    social_media: {
      facebook: 'https://www.facebook.com/epicureansymphony',
      instagram: 'https://www.instagram.com/epicureansymphony',
      twitter: 'https://www.twitter.com/epicureansymph',
    },
  };

  const customerReviews = [
    {
      customer_name: 'CulinaryExplorer',
      rating: 5,
      comment: 'Epicurean Symphony takes gastronomy to new heights. Chef Isabella\'s creations are a culinary masterpiece.',
    },
    {
      customer_name: 'FoodieConnoisseur',
      rating: 4.5,
      comment: 'An epicurean delight! The fusion of flavors in every dish is simply extraordinary.',
    },
    {
      customer_name: 'GourmetGlobetrotter',
      rating: 5,
      comment: 'Exceptional service, world-class cuisine, and a dining experience that lingers on the palate.',
    },
  ];
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">123 Gourmet Avenue, Culinary Metropolis</p>
          <p className="p__opensans">"latitude": 40.7128,</p>
          <p className="p__opensans">"longitude": -74.0060</p>
        </div>

        <div className="app__footer-links_logo">
          <h1 class="app__navbar-logo">Epicurean Symphony</h1>
          <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <a href={onlinePresence.social_media.facebook} target="_blank" rel="noopener noreferrer">
              <FiFacebook />
            </a>
            <a href={onlinePresence.social_media.twitter} target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </a>
            <a href={onlinePresence.social_media.instagram} target="_blank" rel="noopener noreferrer">
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">Epicurean Symphony. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
