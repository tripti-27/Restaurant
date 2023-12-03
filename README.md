# Restaurant Website

A modern and responsive restaurant website built using React.js.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a React.js-based restaurant website that provides an online presence for the restaurant. It showcases the menu, information about the restaurant, and allows users to make reservations.

## Features

- Responsive design for various devices.
- Dynamic menu display with categories.
- Reservation form for users to book a table.
- About Us page with information about the restaurant.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tripti-27/Restaurant/tree/main.git
   ```

2. Navigate to the project directory:

   ```bash
   cd reactfrontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the website.

## Technologies Used

- React.js
- [React Router](https://reactrouter.com/) for navigation
- [Styled Components](https://styled-components.com/) for styling
- Other dependencies as listed in `package.json`

# REST API Integration

React Application Integration
In the React.js application (reactfrontend), the REST API is utilized to fetch data dynamically. Here's how you can integrate it:

Open the src/services/api.js file in your React project.

Update the baseURL variable with the URL where your REST API server is running. By default, it's set to http://localhost:5000.



const baseURL = 'http://localhost:5000';
In your React components, use the axios library or any other HTTP client to make API requests. Example:



import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/api/menu');
    // Handle the data received from the API
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
Adjust the API endpoints and data handling according to your project requirements.

Now, your React application is connected to the REST API, and you can dynamically fetch and display data from the server in your components.



## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.


# Launch page of website

<img width="948" alt="image" src="https://github.com/tripti-27/Restaurant/assets/107769188/1a3d9f49-b6c5-4eef-9447-402c964f5e7a">

## License

This project is licensed under the [MIT License](LICENSE).


