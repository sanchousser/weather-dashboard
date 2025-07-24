import { WeatherList } from './Weather/WeatherList/WeatherList';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import { useState } from 'react';

import { fetchCoordinates, fetchWeather } from '../services/getWeatherContent';

export const App = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);

  const handleChange = e => setQuery(e.target.value);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const coords = await fetchCoordinates(query);
      const weather = await fetchWeather(coords);
      setCityInfo(coords);
      setWeatherData(weather);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <Hero query={query} onChange={handleChange} onSubmit={handleSubmit} />
        {weatherData && cityInfo && (
          <WeatherList weatherData={weatherData} cityInfo={cityInfo} />
        )}
        <Footer />
      </Container>
    </>
  );
};
