import css from './WeatherStats.module.css'
import warmIcon from '../../../imgs/weather/warm.png'
import coldIcon from '../../../imgs/weather/cold.png'
import humidityIcon from '../../../imgs/weather/humidity.png'
import pressureIcon from '../../../imgs/weather/pressure.png'
import windSpeedIcon from '../../../imgs/weather/windspeed.png'
import visibilityIcon from '../../../imgs/weather/visibility.png'



export const WeatherStats = ({ weatherCard }) => {

    const getVisibilityDescription = (visibility) => {
        if (visibility < 500) return "Very poor"
        else if (visibility < 2000) return "Poor"
        else if (visibility < 6000) return "Moderate"
        else if (visibility < 10000) return "Good"
        else return "Unlimited"
    }

    const getMaxTemp = (daily) => {
        const maxDayTemps = []
        daily.map(stat => maxDayTemps.push(stat.temp.max))
        return (maxDayTemps.reduce((sum, num) => sum + num, 0) / maxDayTemps.length).toFixed(1);
    }

    const getMinTemp = (daily) => {
        const minDayTemps = []
        daily.map(stat => minDayTemps.push(stat.temp.min))
        return (minDayTemps.reduce((sum, num) => sum + num, 0) / minDayTemps.length).toFixed(1);
    }

    return (
        <div className={css.weather__stats__div}>
            <ul className={css.weather__stats}>
                <li className={css.stats__item}>
                    <p className={css.item__title}>Feels like</p>
                    <p className={css.item__comment}>{weatherCard.data.current.feels_like}</p>
                    <img className={css.item__icon} src={weatherCard.data.current.feels_like > 10 ? warmIcon : coldIcon} alt="" />
                </li>
                <li className={css.stats__item}>
                    <p className={css.item__title}>Min ℃</p>
                    <p className={css.item__mintemp}>{getMinTemp(weatherCard.data.daily)} ℃</p>
                    <p className={css.item__title}>Max ℃</p>
                    <p className={css.item__comment}>{getMaxTemp(weatherCard.data.daily)} ℃</p>
                </li>
                <li className={css.stats__item}>
                    <p className={css.item__title}>Humidity</p>
                    <p className={css.item__comment}>{weatherCard.data.current.humidity}%</p>
                    <img className={css.item__icon} src={humidityIcon} alt="" />
                </li>
                <li className={css.stats__item}>
                    <p className={css.item__title}>Pressure</p>
                    <p className={css.item__comment}>{weatherCard.data.current.pressure} PA</p>
                    <img className={css.item__icon} src={pressureIcon} alt="" />
                </li>
                <li className={css.stats__item}>
                    <p className={css.item__title}>Wind speed</p>
                    <p className={css.item__comment}>{weatherCard.data.current.wind_speed} m/s</p>
                    <img className={css.item__icon} src={windSpeedIcon} alt="" />
                </li>
                <li className={css.stats__item}>
                    <p className={css.item__title}>Visibility</p>
                    <p className={css.item__comment}>{getVisibilityDescription(weatherCard.data.current.visibility)}</p>
                    <img className={css.item__icon} src={visibilityIcon} alt="" />
                </li>
            </ul>
        </div>

    )
}