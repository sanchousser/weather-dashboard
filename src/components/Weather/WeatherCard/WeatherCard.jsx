import { MdRefresh } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


import { format } from 'date-fns';

import css from './WeatherCard.module.css'
import { useState } from "react";

// export const WeatherCard = ({ data, city }) => {
export const WeatherCard = ({onCardDelete, weatherCard}) => {

    const [liked, setLiked] = useState(false);


    if (!weatherCard.data?.current || !weatherCard.name) {
        return <li>Loading weather data...</li>;
    }

    const onHeartClick = (e) => {
        e.preventDefault()
        setLiked(prev => !prev);
    }

    // const dt = new Date(weatherCarddata.current.dt * 1000);
    // const icon = data.current.weather?.[0]?.icon;
    // const description = data.current.weather?.[0]?.description;
    // console.log('dt:', dt)

    return (
        <li className={css.weather__card}>
            <div className={css.place__text}>
                <p>{weatherCard.name}</p>
                <p>{weatherCard.country}</p>
            </div>
            <p className={css.time}>{format(weatherCard.data.dt, 'HH:mm')}</p>
            <div className={css.forecast__btns}>
                <button>Hourly forecast</button>
                <button>Weekly forecast</button>
            </div>
            <div className={css.date}>
                <p>{format(weatherCard.data.dt, 'dd.MM.yyyy')}</p>
                <span>|</span>
                <p>{format(weatherCard.data.dt, 'EEEE')}</p>
            </div>

            <div className={css.temperature__icon__div}>
                {/* <IoSunnySharp className={css.temperature__icon} /> */}

                <img src={`http://openweathermap.org/img/wn/${weatherCard.icon}@2x.png`} className={css.temperature__icon} alt={weatherCard.description} />

            </div>

            <p className={css.temperature}>{Math.round(weatherCard.data.current.temp)}℃</p>

            <div className={css.weather__btns}>
                <MdRefresh className={css.refresh} />
                {/* <FaRegHeart onClick={onHeartClick} className={css.heart} /> */}
                {liked ? <FaHeart onClick={onHeartClick} color="red" className={css.liked}/> : <FaRegHeart onClick={onHeartClick} className={css.heart}/>}
                <button>See more</button>
                <RiDeleteBin6Line onClick={() => onCardDelete(weatherCard.name)} className={css.bin} />

            </div>

        </li>
    )
}