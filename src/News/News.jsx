import css from './News.module.css';

import news from '../imgs/news.png';

export default function News() {
  return (
    <section className={css.news__section}>
      <h2 className={css.news__title}>Interacting with our pets</h2>
      <ul className={css.news__list}>
        <li className={css.news__item}>
          <img src={news} alt="" className="news__img" />
          <p className={css.news__text}>
            Rescue pups pose as ghosts in festive photo shoot
          </p>
        </li>
        <li className={css.news__item}>
          <img src={news} alt="" className="news__img" />
          <p className={css.news__text}>
            Rescue pups pose as ghosts in festive photo shoot
          </p>
        </li>
        <li className={css.news__item}>
          <img src={news} alt="" className="news__img" />
          <p className={css.news__text}>
            Rescue pups pose as ghosts in festive photo shoot
          </p>
        </li>
        <li className={css.news__item}>
          <img src={news} alt="" className="news__img" />
          <p className={css.news__text}>
            Rescue pups pose as ghosts in festive photo shoot
          </p>
        </li>
      </ul>
      <button className={css.news__btn} type="button">
        See more
      </button>
    </section>
  );
}
