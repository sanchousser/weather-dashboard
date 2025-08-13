import { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { IoPersonCircleOutline } from 'react-icons/io5';
import css from './MobileMenu.module.css';
import SignUpModal from 'components/SignUpModal/SignUpModal';

export default function MobileMenu({ isLoggedIn, username, onSignUp }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleMenuClick() {
    setIsVisible(prev => !prev);
  }

  const openModal = () => {
    setIsModalOpen(true);
    setIsVisible(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleSignUp = userUsername => {
    onSignUp(userUsername);
  };

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
            {isLoggedIn ? (
              <span className={css.username__mobile}>{username}</span>
            ) : (
              <button
                type="button"
                className={css.menu__signUp__btn}
                onClick={openModal}
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className={css.modal__backdrop} onClick={closeModal}>
          <div
            className={css.modal__content}
            onClick={e => e.stopPropagation()}
          >
            <SignUpModal onClose={closeModal} onSignUp={handleSignUp} />
          </div>
        </div>
      )}
    </>
  );
}
