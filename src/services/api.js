import axios from 'axios';

export function getCurrentPositionFromBrowser() {
  return new Promise(function(resolve, _) {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }
    );
  })
}

export function getCurrentPositionFromOpenApi(city) {
  return new Promise(function(resolve, reject) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APPI}`)
      .then(response => {
        resolve({
          name: response.data.name,
          latitude: response.data.coord.lat,
          longitude: response.data.coord.lon
        });
      })
      .catch(err => {
        reject(err);
      }
    );
  })
}

export function getWeatherData(position) {
  return new Promise(function(resolve, reject) {
    axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${position.latitude}&lon=${position.longitude}&exclude=hourly&appid=${process.env.REACT_APP_APPI}&units=metric`)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      }
    );
  })
}