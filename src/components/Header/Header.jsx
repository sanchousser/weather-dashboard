import { IoIosArrowDown } from 'react-icons/io';
import { IoPersonCircleOutline } from 'react-icons/io5';

import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.header__box}>
        <img className={css.logo} src="/assets/logo.png" alt="logo" />

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

        {/* menu */}
        <div className={css.menu__thumb}>
          <p className={css.menu__title}>Menu</p>
          <IoIosArrowDown className={css.menu__icon} />
        </div>
      </div>
    </header>
  );
}
