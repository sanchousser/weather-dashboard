import css from './WeatherStats.module.css'
import warmIcon from '../../../imgs/weather/warm.png'


export const WeatherStats = () => {
    return (
        <div className={css.weather__stats__div}>
            <ul className={css.weather__stats}>
                <li className={css.stats__item}>
                    <p className={css.item__title}>Feels like</p>
                    <p className={css.item__comment}>29,2</p>
                    <img className={css.item__icon} src={warmIcon} alt="" />
                </li>
            </ul>
        </div>

    )
}