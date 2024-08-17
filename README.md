
# WeatherApp



## Overview

WeatherApp is a simple and intuitive application that provides real-time weather information for any location around the globe. The application is built using HTML, CSS, and JavaScript, and it leverages an API to fetch weather data.
## Features

- **Real-time Weather Information:** Get up-to-date weather information for any city or location.
- **Temperature, Humidity, and Wind Details:** Displays temperature in Celsius/Fahrenheit, humidity, and wind speed.
- **Responsive Design:** Works seamlessly across devices with different screen sizes.
- **Dynamic Background:** The background changes based on the current weather condition.
- **Search Functionality:** Easily search for any city or location to get its weather details.

## Technologies Used

- **HTML:** For structuring the content of the application.
- **CSS:** For styling and making the app visually appealing.
- **JavaScript:**For adding interactivity and fetching data from the weather API.
## Usage/Examples

- **Search for a City:** Enter the name of a city in the search bar to get its weather details.
- **View Weather:** The app will display the current temperature, humidity, wind speed, and an icon representing the weather condition.
- **Switch Temperature Units:** You can toggle between Celsius and Fahrenheit for temperature display.

## API Integration

This app uses the OpenWeatherMap API to fetch real-time weather data. To use the app, you need to obtain an API key from OpenWeatherMap and replace the placeholder in the JavaScript file.

const apiUrl = *http://api.weatherapi.com/v1/current.json?key=3b95982ac19544aea5e210640241608&q=Lucknow*;
