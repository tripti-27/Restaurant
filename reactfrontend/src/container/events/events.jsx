import React from 'react';
import { events,BsArrowLeftShort, BsArrowRightShort  } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './events.css';

const event = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction == 'left'){
            current.scrollLeft -= 300;
        }else {
            current.scrollLeft += 300;
        }
    };

    return(
        <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Events" />
        <h1 className="headtext__cormorant">Upcoming Events</h1>
        <div className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}><p>name: Culinary Artistry Showcase<br />
        date:"2023-12-15"<br />description: "Join us for a night of culinary artistry as Chef Isabella presents her latest creations in an exclusive tasting event."></p>
        <p>name: Wine and Dine Pairing Night<br />
        date:"2023-01-20"<br />description: "Indulge in an evening of exquisite wine and food pairings, curated by our sommelier and Chef Isabella."></p>
    </div>
    </div>
    </div>
  );
};