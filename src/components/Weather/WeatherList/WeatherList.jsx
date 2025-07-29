import { WeatherCard } from "components/Weather/WeatherCard/WeatherCard"
import { nanoid } from 'nanoid'

import css from './WeatherList.module.css'

// export const WeatherList = ({weatherData, cityInfo}) => {
export const WeatherList = ({onCardDelete, weatherCards}) => {

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
                    <WeatherCard key={nanoid()} weatherCard={weatherCard} onCardDelete={onCardDelete}/>
                )
            })}
        </ul>
    )
}