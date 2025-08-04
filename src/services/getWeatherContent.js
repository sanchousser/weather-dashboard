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

export const fetchWeather = async ({ lat, lon }) => {
  const response = await fetch(

    `${BASE_URL}/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`

  );

  const data = await response.json();
  return data;

};

