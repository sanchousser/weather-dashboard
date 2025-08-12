import { useState, useEffect } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import logo from '../../imgs/logo.svg';
import css from './Header.module.css';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import SignUpModal from 'components/SignUpModal/SignUpModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // const savedUsername = localStorage.getItem('username');
    // if (savedUsername) {
    //   setUsername(savedUsername);
    //   setIsLoggedIn(true);
    // }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleSignUp = userUsername => {
    setUsername(userUsername);
    setIsLoggedIn(true);
    localStorage.setItem('username', userUsername);
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.header__box}>
          <img className={css.logo} src={logo} alt="logo" />

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
            {isLoggedIn ? (
              <span className={css.username}>{username}</span>
            ) : (
              <button
                type="button"
                className={css.signUp__btn}
                onClick={openModal}
              >
                Sign Up
              </button>
            )}
            <IoPersonCircleOutline className={css.signUp__icon} />
          </div>

          <MobileMenu
            isLoggedIn={isLoggedIn}
            username={username}
            onSignUp={handleSignUp}
          />
        </div>
      </header>

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
