import css from './Footer.module.css';
import logo from '../../imgs/logo.svg';

import instagram from '../../imgs/footer/1.svg';
import facebook from '../../imgs/footer/2.svg';
import whatsapp from '../../imgs/footer/3.svg';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <img className={css.footer__logo} src={logo} alt="logo" />

      <div className={css.footer__thumb}>
        <div className={css.adress__box}>
          <p className={css.adress__title}>Address</p>
          <p className={css.adress__text}>
            Svobody str. 35 <br />
            Kyiv <br /> Ukraine
          </p>
        </div>

        <div className={css.contact__box}>
          <p className={css.contact__title}>Contact us</p>
          <ul className={css.contact__list}>
            <li className={css.contact__item}>
              <img src={instagram} alt="inst" className={css.contact__img} />
            </li>
            <li className={css.contact__item}>
              <img src={facebook} alt="facebook" className={css.contact__img} />
            </li>
            <li className={css.contact__item}>
              <img src={whatsapp} alt="whatsapp" className={css.contact__img} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
