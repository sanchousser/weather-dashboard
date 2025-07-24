import { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { IoPersonCircleOutline } from 'react-icons/io5';
import css from './MobileMenu.module.css';

export default function MobileMenu() {
  const [isVisible, setIsVisible] = useState(false);

  function handleMenuClick() {
    setIsVisible(prev => !prev);
  }

  return (
    <>
      <button
        type="button"
        className={css.mobileMenu__btn}
        onClick={handleMenuClick}
      >
        Menu
        {isVisible ? <MdOutlineKeyboardArrowRight /> : <IoIosArrowDown />}
      </button>
      {isVisible && (
        <div className={css.mobileMenu__container}>
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
      )}
    </>
  );
}
