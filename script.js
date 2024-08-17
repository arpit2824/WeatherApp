document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=3b95982ac19544aea5e210640241608&q=${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.current) {
                document.getElementById('cityName').textContent = `Weather for ${data.location.name}`;
                document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
                document.getElementById('minTemp').textContent = `${data.current.temp_c}°C`; // Note: WeatherAPI doesn't provide min/max, using current temp
                document.getElementById('maxTemp').textContent = `${data.current.temp_c}°C`; // Same as above
                document.getElementById('humidity').textContent = `${data.current.humidity}%`;
                document.getElementById('feelsLike').textContent = `${data.current.feelslike_c}°C`;
                document.getElementById('humidityInfo').textContent = `${data.current.humidity}%`;
                document.getElementById('windSpeed').textContent = `${data.current.wind_kph} km/hr`;
                document.getElementById('windSpeedInfo').textContent = `${data.current.wind_kph} km/hr`;
                document.getElementById('windDegrees').textContent = `${data.current.wind_degree}°`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}
