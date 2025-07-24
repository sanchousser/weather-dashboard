import { MdRefresh } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSunnySharp } from "react-icons/io5";

import css from './WeatherCard.module.css'

export const WeatherCard = () => {
    return (
        <li className={css.weather__card}>
            <div className={css.place__text}>
                <p>City</p>
                <p>Country</p>
            </div>
            <p className={css.time}>Time</p>
            <div className={css.forecast__btns}>
                <button>Hourly forecast</button>
                <button>Weekly forecast</button>
            </div>
            <div className={css.date}>
                <p>Date</p>
                <span>|</span>
                <p>Day</p>
            </div>

            <div className={css.temperature__icon__div}>
                <IoSunnySharp className={css.temperature__icon} />
            </div>

            <p className={css.temperature}>temperature</p>

            <div className={css.weather__btns}>
                <MdRefresh className={css.refresh}/>
                <FaRegHeart className={css.heart}/>
                <button>See more</button>
                <RiDeleteBin6Line className={css.bin}/>

            </div>

        </li>
    )
}