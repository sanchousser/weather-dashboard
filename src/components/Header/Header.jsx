import { IoPersonCircleOutline } from 'react-icons/io5';
import logo from '../../imgs/logo.svg';
import css from './Header.module.css';
import MobileMenu from 'components/MobileMenu/MobileMenu';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.header__box}>
        <a href='/'><img className={css.logo} src={logo} alt="logo" /></a>

        <ul className={css.header__list}>
          <li className={css.header__item}>
            <a href="fg" className={css.header__link}>
              Who we are
            </a>
          </li>
          <li className={css.header__item}>
            <a href="ff" className={css.header__link}>
              Contacts
            </a>
          </li>
          <li className={css.header__item}>
            <a href="ff" className={css.header__link}>
              Menu
            </a>
          </li>
        </ul>

        <div className={css.signUp__thumb}>
          <button type="button" className={css.signUp__btn}>
            Sign Up
          </button>
          <IoPersonCircleOutline className={css.signUp__icon} />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
