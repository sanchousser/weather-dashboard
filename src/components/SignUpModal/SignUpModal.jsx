import css from './SignUpModal.module.css';
// import { IoMdClose } from 'react-icons/io';

export default function SignUpModal() {
  return (
    <div className={css.signUp__container}>
      {/* <IoMdClose className={css.signUp__close} /> */}
      <h3 className={css.signUp__title}>Sign up</h3>
      <form className={css.signUp__form}>
        <label className={css.signUp__label}>
          Username
          <input
            type="text"
            name="username"
            className={css.signUp__input}
            placeholder="Username"
          />
        </label>
        <label className={css.signUp__label}>
          E-Mail
          <input
            type="email"
            name="email"
            className={css.signUp__input}
            placeholder="E-Mail"
          />
        </label>
        <label className={css.signUp__label}>
          Password
          <input
            type="password"
            name="password"
            className={css.signUp__input}
            placeholder="Password"
          />
        </label>
      </form>
      <button className={css.signUp__btn}>Sign up</button>
      <p className={css.signUp__text}>
        Already have an account?
        <a href="." className={css.signUp__link}>
          Log In
        </a>
      </p>
    </div>
  );
}
