import { format } from 'date-fns';
import css from './Hero.module.css';

export default function Hero({ date = new Date() }) {
  const line1 = format(date, 'MMMM yyyy');
  const line2 = format(date, 'EEEE, do');

  return (
    <section className={css.hero__section}>
      <h1 className={css.hero__title}>Weather dashboard</h1>
      <div className={css.line}></div>
      <p>
        Create your personal list of favorite cities and always be aware of the
        weather.
      </p>
      <p className={css.hero__data}>
        {line1} <br />
        {line2}
      </p>
    </section>
  );
}
