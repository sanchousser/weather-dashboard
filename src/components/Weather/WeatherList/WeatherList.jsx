import { WeatherCard } from "components/Weather/WeatherCard/WeatherCard"
import { nanoid } from 'nanoid'

import css from './WeatherList.module.css'

// export const WeatherList = ({weatherData, cityInfo}) => {
export const WeatherList = ({onCardDelete, weatherCards, toggleSeeMore, toggleHourlyForecast, toggleWeeklyForecast}) => {

    // console.log(weatherData);
    // console.log(cityInfo)
    // return (
    //     <ul className={css.weather__list}>
    //         < WeatherCard data={weatherData} city={cityInfo} />
    //     </ul>
    // )

    // console.log('Weather list ;',weatherCards)

    return (
        <ul className={css.weather__list}>
            {weatherCards.map(weatherCard => {
                // console.log('weather card: ', weatherCard)
                return (    
                    <WeatherCard key={weatherCard.data.id} weatherCard={weatherCard} toggleSeeMore={toggleSeeMore} onCardDelete={onCardDelete} toggleHourlyForecast={toggleHourlyForecast} toggleWeeklyForecast={toggleWeeklyForecast} />
                )
            })}
        </ul>
    )
}