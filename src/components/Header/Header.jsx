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

      {/* mobile menu */}
      {/* <div class="mobile-menu js-mobile-menu-container">
        <div class={css.menu__container}>
          <ul className={css.menu__list}>
            <li className={css.menu__item}>
              <a href="fg" className={css.menu__link}>
                Who we are
              </a>
            </li>
            <li className={css.menu__item}>
              <a href="ff" className={css.menu__link}>
                Contacts
              </a>
            </li>
            <li className={css.menu__item}>
              <a href="ff" className={css.menu__link}>
                Menu
              </a>
            </li>
          </ul>

          <div className={css.menu__signUp}>
            <IoPersonCircleOutline className={css.menu__signUp__icon} />
            <button type="button" className={css.menu__signUp__btn}>
              Sign Up
            </button>
          </div>
        </div>
      </div> */}
    </header>
  );
}
