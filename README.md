# Stream Mind AI Powered Movie Platform

Welcome to the **Stream Mind AI Powered Movie Platform**! This project is a movie browsing platform built using React.js and styled with SASS, leveraging the powerful TMDb API for movie data.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About
Stream Mind is an AI-powered movie platform designed to provide users with an engaging and interactive way to discover and explore movies. The application fetches movie data from The Movie Database (TMDb) API, offering a wide range of features including search functionality, movie details, and personalized recommendations.

## Features
- **Movie Search**: Search for movies by title.
- **Movie Details**: View detailed information about a selected movie, including its synopsis, cast, and crew.
- **Personalized Recommendations**: Get movie recommendations based on your viewing preferences.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.

## Installation
To get started with the Stream Mind AI Powered Movie Platform, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayush-Sonkar/stream-mind.git
   cd stream-mind-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add your TMDb API key**
   ```bash
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage
Once the application is up and running, you can start exploring movies by using the search bar or browsing through the recommendations. Click on any movie to view its details and additional information.

## API Key
This project requires an API key from [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api). Follow these steps to obtain your API key:

1. Sign up for a TMDb account.
2. Navigate to the [API section](https://www.themoviedb.org/settings/api).
3. Click on "Create API Key" and follow the instructions.
4. Copy the provided API key and add it to your `.env` file as shown in the installation instructions.

## Folder Structure
The project structure is as follows:

```
stream-mind-ai/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
├── README.md
└── ...
```

- **assets**: Static assets like images and icons.
- **components**: Reusable React components.
- **pages**: React components for different pages.![Uploading Screenshot 2024-05-23 130007.png…]()

- **services**: API service functions.
- **styles**: SASS stylesheets.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements
- [React.js](https://reactjs.org/)
- [SASS](https://sass-lang.com/)
- [The Movie Database (TMDb)](https://www.themoviedb.org/)

Thank you for using the Stream Mind AI Powered Movie Platform! If you have any questions or feedback, please feel free to reach out.
