import { WeatherList } from './Weather/WeatherList/WeatherList';

import Container from './Container/Container';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import News from './News/News';


import { useEffect, useState } from "react";


import { fetchCoordinates, fetchWeather } from '../services/getWeatherContent';
import { WeatherStats } from './Weather/WeatherStats/WeatherStats';

import WeatherChart from './Weather/WeatherChart/WeatherChart';

import fetchImages from 'services/getPixabayContent';
import SwiperSection from './Swiper/SwiperSection';


export const App = () => {
  const [query, setQuery] = useState('');
  // const [weatherData, setWeatherData] = useState(null);
  // const [cityInfo, setCityInfo] = useState(null);

  const [weatherCards, setWeatherCards] = useState(() => {
    return JSON.parse(window.localStorage.getItem('weatherCards')) ?? [];
  });
  const [seeMore, setSeeMore] = useState(false);
  const [cityToSeeMore, setCityToSeeMore] = useState('');


  const [chartData, setChartData] = useState({
    timesArr: [],
    tempsArr: []
  });
  const [cityForChart, setCityForChart] = useState('');
  const [hourlyForecast, setHourlyForecast] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('weatherCards', JSON.stringify(weatherCards));
  }, [weatherCards]);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchImages();
        console.log(data);
        setImages(data.hits);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);


  const handleChange = e => setQuery(e.target.value);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const coords = await fetchCoordinates(query);
      const weather = await fetchWeather(coords);

      const alreadyExists = weatherCards.some(
        card => card.name === coords.name
      );
      if (alreadyExists) return;
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

      setSeeMore(false);
      setHourlyForecast(false)

    } catch (error) { console.log(error.message) }
  }


  const handleCardDelete = name => {
    setWeatherCards(prevCards => prevCards.filter(card => card.name !== name));

    setSeeMore(false);

    setHourlyForecast(false);
  }


  const toggleSeeMore = cityName => {
    if (seeMore && cityToSeeMore !== cityName) {
      setCityToSeeMore(cityName);
    } else {
      setSeeMore(prev => !prev);
      setCityToSeeMore(cityName);
    }

  }


  const renderHourlyData = (cityName) => {

    const selectedCard = weatherCards.find(card => card.name === cityName);
    if (!selectedCard || !selectedCard.data?.hourly) return;

    setCityForChart(cityName);


    const timesArr = [];
    const tempsArr = [];


    selectedCard.data.hourly.forEach(hourlyData => {
      const date = new Date(hourlyData.dt * 1000);
      const hourStr = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true,
      }).toLowerCase();
      const hourTemp = hourlyData.temp;

      timesArr.push(hourStr);
      tempsArr.push(hourTemp);
    });

    setChartData({
      timesArr: timesArr.slice(0, 20),
      tempsArr: tempsArr.slice(0, 20),
    });
    console.log(chartData)
  };

  const toggleHourlyForecast = (cityName) => {

    if (hourlyForecast && cityForChart !== cityName) {
      setCityForChart(cityName);
      renderHourlyData(cityName);
    } else {
      setHourlyForecast(prev => !prev)
      renderHourlyData(cityName);
    }
  }

  const findByName = name => weatherCards.find(card => card.name === name);

  return (
  <>
    <Container>
      <Header />
    </Container>
    <Hero query={query} onChange={handleChange} onSubmit={handleSubmit} />
    <Container>
      {weatherCards.length !== 0 && <WeatherList onCardDelete={handleCardDelete} weatherCards={weatherCards} toggleSeeMore={toggleSeeMore} toggleHourlyForecast={toggleHourlyForecast} />}
      {seeMore && cityToSeeMore && <WeatherStats weatherCard={findByName(cityToSeeMore)} />}
      {cityForChart && hourlyForecast && <WeatherChart hourlyTime={chartData.timesArr} hourlyTemp={chartData.tempsArr} />}
      <News />
      <SwiperSection images={images} />
    </Container>
    <Container>
      <Footer />
    </Container>
  </>
);
      }
