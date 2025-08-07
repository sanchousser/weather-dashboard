const BASE_URL = `https://api.openweathermap.org`;

const API_KEY = '817462e9ebe481f73950092aafc8462e';

export const fetchCoordinates = async city => {
  const response = await fetch(
    `${BASE_URL}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );

  const data = await response.json();

  if (data.length === 0) throw new Error('Oops! City not found!');

  return {
    lat: data[0].lat,
    lon: data[0].lon,
    country: data[0].country,
    name: data[0].name,
  };
};

export const fetchWeather = ({ lat, lon }) => {
  return fetch(
    `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  ).then(response => response.json());
};

export const fetchHourly = ({ lat, lon }) => {
  return fetch(
    `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  ).then(response => response.json());
};

export const fetchWeekly= ({ lat, lon }) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=metric&cnt=8&appid=${API_KEY}`
  ).then(response => response.json());
};
