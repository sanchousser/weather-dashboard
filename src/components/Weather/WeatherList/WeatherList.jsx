import { WeatherCard } from "components/Weather/WeatherCard/WeatherCard"

import css from './WeatherList.module.css'

export const WeatherList = ({weatherData, cityInfo}) => {
    return (
        <ul className={css.weather__list}>
            < WeatherCard data={weatherData} city={cityInfo} />
        </ul>
    )
}