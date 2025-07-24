import { MdRefresh } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { IoSunnySharp } from "react-icons/io5";

import { format } from 'date-fns';

import css from './WeatherCard.module.css'

export const WeatherCard = ({ data, city }) => {

    if (!data?.current || !city) {
        return <li>Loading weather data...</li>;
    }

    const dt = new Date(data.current.dt * 1000);
    const icon = data.current.weather?.[0]?.icon;
    const description = data.current.weather?.[0]?.description;

    return (
        <li className={css.weather__card}>
            <div className={css.place__text}>
                <p>{city.name}</p>
                <p>{city.country}</p>
            </div>
            <p className={css.time}>{format(dt, 'HH:mm')}</p>
            <div className={css.forecast__btns}>
                <button>Hourly forecast</button>
                <button>Weekly forecast</button>
            </div>
            <div className={css.date}>
                <p>{format(dt, 'dd.MM.yyyy')}</p>
                <span>|</span>
                <p>{format(dt, 'EEEE')}</p>
            </div>

            <div className={css.temperature__icon__div}>
                {/* <IoSunnySharp className={css.temperature__icon} /> */}
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className={css.temperature__icon} alt={description} />
            </div>

            <p className={css.temperature}>{Math.round(data.current.temp)}℃</p>

            <div className={css.weather__btns}>
                <MdRefresh className={css.refresh} />
                <FaRegHeart className={css.heart} />
                <button>See more</button>
                <RiDeleteBin6Line className={css.bin} />

            </div>

        </li>
    )
}