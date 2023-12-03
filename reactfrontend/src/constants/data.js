import images from './images';
// MenuItem.jsx

import React from 'react';

const MenuItem = ({ title, price, tags, description, nutritional_info, seasonal_availability }) => (
  <div className="menu-item">
    <h3>{title}</h3>
    <p>Price: {price}</p>
    <p>Tags: {tags}</p>
    <p>Description: {description}</p>
    <p>Nutritional Info: {nutritional_info}</p>
    <p>Seasonal Availability: {seasonal_availability}</p>
  </div>
);

const wines = [
  {
    title: 'Mango Tango Ceviche',
    price: '$32.99',
    tags: 'Sea bass, Shrimp, Mango, Avocado',
    description:'Fresh ceviche with mango, avocado, and citrus-infused seafood medley.',
    nutritional_info:'calories: 280,protein: 20,carbohydrates: 15,fat: 18',
    seasonal_availability:'Year-round',
  },
  {
    title: 'Truffle Butter Escargot',
    price: '$28.99',
    tags: 'Escargot, Truffle butter, Baguette, Garlic',
    description:'Escargot baked in truffle butter, served with garlic-infused baguette.',
    nutritional_info:'calories: 350,protein: 15, carbohydrates: 25,fat: 22',
    seasonal_availability:'Year-round',
  },
  {
    title: 'Global Fusion Entrees',
    price: '$42.99',
    tags: 'Chicken tikka, Saffron curry, Basmati rice, Naan bread',
    description:'Tender chicken tikka in a rich saffron-infused tomato curry, served with basmati rice.',
    nutritional_info:'calories: 480,protein: 25, carbohydrates: 40,fat: 28',
    seasonal_availability:'Year-round',
  },
  {
    title: 'Chimichurri-Infused Argentinian Ribeye',
    price: '$56.99',
    tags: 'Ribeye steak, Chimichurri sauce, Sweet potato puree, Grilled vegetables',
    description:'Grilled ribeye steak marinated in zesty chimichurri sauce, served with sweet potato puree.',
    nutritional_info:'calories: 600,protein: 40, carbohydrates: 30,fat: 45',
    seasonal_availability:'Year-round',
  },
];

const cocktails = [
  {
    title: 'Passion Fruit Cheesecake',
    price: '$18.99',
    tags: 'Cream cheese, Passion fruit, Mango coulis, Graham cracker crust',
    description:'Creamy cheesecake with a tropical twist of passion fruit, topped with mango coulis.',
    nutritional_info:'calories: 380,protein: 8, carbohydrates: 35,fat: 25',
    seasonal_availability:'Year-round',
  },
  {
    title: "Chocolate Hazelnut Decadence",
    price: '$24.99',
    tags: 'Chocolate hazelnut mousse, Hazelnut praline, Espresso gelato',
    description:'Decadent chocolate hazelnut mousse layered with hazelnut praline, served with espresso gelato.',
    nutritional_info:'calories: 450,protein: 10, carbohydrates: 40,fat: 30',
    seasonal_availability:'Year-round',
  },
  {
    title: 'Butternut Squash Sage Risotto',
    price: '$36.99',
    tags: 'Arborio rice, Butternut squash, Sage, Parmesan cheese',
    description:'Creamy risotto with roasted butternut squash, sage, and Parmesan cheese.',
    nutritional_info:'calories: 420,protein: 10, carbohydrates: 60,fat: 18',
    seasonal_availability:'Fall',
  },
  {
    title: 'Mango Coconut Basil Sorbet',
    price: '$14.99',
    tags: 'Mango, Coconut milk, Basil, Simple syrup',
    description:'Refreshing sorbet with the tropical combination of mango, coconut, and fresh basil.',
    nutritional_info:'calories: 180,protein: 1, carbohydrates: 40,fat: 0',
    seasonal_availability:'Summer',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Three Michelin Stars',
    subtitle:'Michelin Guide    2023',
    
  },
  {
    imgUrl: images.award01,
    title: 'Outstanding Chef',
    subtitle: 'James Beard Foundation 2022',
  },
  {
    imgUrl: images.award03,
    title: 'Top 5 Restaurants Worldwide',
    subtitle: 'Worlds 50 Best Restaurants',
  },
];

export default { wines, cocktails, awards, MenuItem };
