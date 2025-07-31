import { WeatherList } from './Weather/WeatherList/WeatherList';

import Container from './Container/Container';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import News from 'News/News';
import SwiperSection from './Swiper/SwiperSection';
import Footer from './Footer/Footer';

import { useEffect, useState } from 'react';

import { fetchCoordinates, fetchWeather } from '../services/getWeatherContent';
import { WeatherStats } from './Weather/WeatherStats/WeatherStats';
import fetchImages from 'services/getPixabayContent';

export const App = () => {
  const [query, setQuery] = useState('');
  // const [weatherData, setWeatherData] = useState(null);
  // const [cityInfo, setCityInfo] = useState(null);

  const [weatherCards, setWeatherCards] = useState(() => {
    return JSON.parse(window.localStorage.getItem('weatherCards')) ?? [];
  });
  const [seeMore, setSeeMore] = useState(false);
  const [cityToSeeMore, setCityToSeeMore] = useState('');

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchImages();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('weatherCards', JSON.stringify(weatherCards));
  }, [weatherCards]);

  useEffect(() => {
    window.localStorage.setItem('weatherCards', JSON.stringify(weatherCards));
  }, [weatherCards]);

  const handleChange = e => setQuery(e.target.value);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const coords = await fetchCoordinates(query);
      const weather = await fetchWeather(coords);
      // setCityInfo(coords);
      // setWeatherData(weather);

      // console.log('cityInfo:', coords);
      // console.log('weatherData:', weather)

      const dt = new Date(weather.current.dt * 1000);
      const icon = weather.current.weather?.[0]?.icon;
      const description = weather.current.weather?.[0]?.description;

      setWeatherCards(prevCards => {
        if (
          window.matchMedia('(width <= 768px)').matches &&
          window.matchMedia('(width > 320px)').matches
        ) {
          return [
            {
              ...coords,
              data: { ...weather, dt },
              icon,
              description,
            },
          ];
        } else if (
          window.matchMedia('(width <= 1200px)').matches &&
          window.matchMedia('(width > 768px)').matches
        ) {
          return [
            ...prevCards.slice(-1),
            {
              ...coords,
              data: { ...weather, dt },
              icon,
              description,
            },
          ];
        } else {
          return [
            ...prevCards.slice(-2),
            {
              ...coords,
              data: { ...weather, dt },
              icon,
              description,
            },
          ];
        }
      });

      setQuery('');
      // console.log('weatherCards:', weatherCards)
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCardDelete = name => {
    setWeatherCards(prevCards => prevCards.filter(card => card.name !== name));

    setSeeMore(false);
  };

  const toggleSeeMore = cityName => {
    if (seeMore && cityToSeeMore !== cityName) {
      setCityToSeeMore(cityName);
    } else {
      setSeeMore(prev => !prev);
      setCityToSeeMore(cityName);
    }
  };

  const findByName = name => weatherCards.find(card => card.name === name);

  return (
    <>
      <Container>
        <Header />
        <Hero query={query} onChange={handleChange} onSubmit={handleSubmit} />

        {/* {weatherData && cityInfo && <WeatherList weatherData={weatherData} cityInfo={cityInfo} />} */}

        {weatherCards.length !== 0 && (
          <WeatherList
            onCardDelete={handleCardDelete}
            weatherCards={weatherCards}
            toggleSeeMore={toggleSeeMore}
          />
        )}
        {seeMore && cityToSeeMore && (
          <WeatherStats weatherCard={findByName(cityToSeeMore)} />
        )}

        <News />
        <SwiperSection images={images} />

        <Footer />
      </Container>
    </>
  );
};
