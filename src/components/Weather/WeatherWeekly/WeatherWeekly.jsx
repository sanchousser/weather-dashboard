import css from './WeatherWeekly.module.css'



export const WeatherWeekly = ({ weatherCard }) => {



    return (
        <div className={css.weekly__wrapper}>
            <div className={css.weekly__section}>
                <p className={css.weekly__title}>Weekly forecast</p>
                <ul className={css.weekly__list}>
                    {weatherCard.data.daily.list.map(daily => {
                        return (
                            <li className={css.weekly__item}>
                                <p className={css.item__date}>{new Date(daily.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                                <div>
                                    <img className={css.item__img} src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt="" />
                                    <p className={css.item__temp}>{Math.round(daily.temp.day)}℃/{Math.round(daily.temp.night)}℃</p>
                                </div>
                                <p className={css.item__descr}>{daily.weather[0].description}</p>
                            </li>
                        )

                    })}
                    {/* <li className={css.weekly__item}>
                        <p className={css.item__date}>Fri, Oct 13</p>
                        <div>
                            <img className={css.item__img} src={icon} alt="" />
                            <p className={css.item__temp}>23/14℃</p>
                        </div>
                        <p className={css.item__descr}>light rain</p>
                    </li>
                    <li className={css.weekly__item}>
                        <p className={css.item__date}>Fri, Oct 13</p>
                         <div>
                            <img className={css.item__img} src={icon} alt="" />
                            <p className={css.item__temp}>23/14℃</p>
                        </div>
                        <p className={css.item__descr}>light rain</p>
                    </li>
                    <li className={css.weekly__item}>
                        <p className={css.item__date}>Fri, Oct 13</p>
                                                <div>
                            <img className={css.item__img} src={icon} alt="" />
                            <p className={css.item__temp}>23/14℃</p>
                        </div>

                        <p className={css.item__descr}>light rain</p>
                    </li>
                    <li className={css.weekly__item}>
                        <p className={css.item__date}>Fri, Oct 13</p>
                                                <div>
                            <img className={css.item__img} src={icon} alt="" />
                            <p className={css.item__temp}>23/14℃</p>
                        </div>

                        <p className={css.item__descr}>light rain</p>
                    </li>
                    <li className={css.weekly__item}>
                        <p className={css.item__date}>Fri, Oct 13</p>
                                                <div>
                            <img className={css.item__img} src={icon} alt="" />
                            <p className={css.item__temp}>23/14℃</p>
                        </div>

                        <p className={css.item__descr}>light rain</p>
                    </li>
                    <li className={css.weekly__item}>
                        <p className={css.item__date}>Fri, Oct 13</p>
                                                <div>
                            <img className={css.item__img} src={icon} alt="" />
                            <p className={css.item__temp}>23/14℃</p>
                        </div>

                        <p className={css.item__descr}>light rain</p>
                    </li>
                    <li className={css.weekly__item}>
                        <p className={css.item__date}>Fri, Oct 13</p>
                                                <div>
                            <img className={css.item__img} src={icon} alt="" />
                            <p className={css.item__temp}>23/14℃</p>
                        </div>

                        <p className={css.item__descr}>light rain</p>
                    </li>
                    <li className={css.weekly__item}>
                        <p className={css.item__date}>Fri, Oct 13</p>
                                                <div>
                            <img className={css.item__img} src={icon} alt="" />
                            <p className={css.item__temp}>23/14℃</p>
                        </div>

                        <p className={css.item__descr}>light rain</p>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}