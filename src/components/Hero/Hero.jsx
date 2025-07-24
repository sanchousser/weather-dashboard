import { format } from 'date-fns';
import { IoIosSearch } from 'react-icons/io';
import css from './Hero.module.css';

export default function Hero({ date = new Date() }) {
  const line1 = format(date, 'MMMM yyyy');
  const line2 = format(date, 'EEEE, do');

  return (
    <section className={css.hero__section}>
      <h1 className={css.hero__title}>Weather dashboard</h1>
      <div className={css.hero__thumb}>
        <div className={css.line__mobile}></div>
        <div className={css.hero__box}>
          <p className={css.hero__text}>
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>
          <div className={css.line}></div>

          <p className={css.hero__data}>
            {line1} <br />
            {line2}
          </p>
        </div>
      </div>

      <form className={css.hero__form}>
        <input
          className={css.hero__input}
          type="text"
          placeholder="Search location..."
        />
        <button className={css.hero__btn} type="button">
          <IoIosSearch className={css.hero__icon} />
        </button>
      </form>
    </section>
  );
}
