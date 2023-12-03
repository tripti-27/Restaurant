import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const location = {
    address: '123 Gourmet Avenue, Culinary Metropolis',
    latitude: 40.7128,
    longitude: -74.0060,
  };

  const handleVisitUsClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">{location.address}</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={handleVisitUsClick}>
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus_img" />
      </div>
    </div>
  );
};

export default FindUs;
