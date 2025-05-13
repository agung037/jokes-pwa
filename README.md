# Jokes App

This is a Progressive Web App (PWA) that displays random jokes with images. Users can fetch new jokes by clicking a button, and the app is designed to work offline using a service worker.

## Features

- Fetch random jokes with images from an API.
- Offline support using a service worker.
- Mobile-friendly design.
- PWA capabilities, including the ability to add the app to the home screen.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd jokes
   ```
3. Open the `index.html` file in your browser to view the app.

## Usage

- Click the "Get New Joke" button to fetch a random joke.
- Add the app to your home screen for a better experience.

## API

This app uses the [Candaan API](https://candaan-api.vercel.app/) to fetch random jokes with images.

## Files

- `index.html`: Main HTML file for the app.
- `style.css`: Stylesheet for the app.
- `sw.js`: Service worker for offline support.
- `manifest.json`: Web app manifest for PWA capabilities.
- `icons/`: Contains app icons and splash screens.

## PWA Features

- **Service Worker**: Ensures the app works offline by caching resources.
- **Web App Manifest**: Provides metadata for the app, enabling installation on mobile devices.
- **Responsive Design**: Optimized for various screen sizes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
