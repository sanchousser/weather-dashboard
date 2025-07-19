import { IoRefresh } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

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
            <div >
                <p>Date</p>
                <p>|</p>
                <p>Day</p>
            </div>

            <img src="" alt="" />

            <p>temperature</p>

            <div>
                <IoRefresh />
                <FaRegHeart />
                <button>See more</button>
                <RiDeleteBin6Line />

            </div>

        </li>
    )
}