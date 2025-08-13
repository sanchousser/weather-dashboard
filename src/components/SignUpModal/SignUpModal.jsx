import { useState } from 'react';
import css from './SignUpModal.module.css';
import { IoMdClose } from 'react-icons/io';

export default function SignUpModal({ onClose, onSignUp }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.username.trim()) {
      onSignUp(formData.username);
      onClose();
    }
  };

  return (
    <div className={css.signUp__container}>
      <IoMdClose className={css.signUp__close} onClick={onClose} />
      <h3 className={css.signUp__title}>Sign up</h3>
      <form className={css.signUp__form} onSubmit={handleSubmit}>
        <label className={css.signUp__label}>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={css.signUp__input}
            placeholder="Username"
            required
          />
        </label>
        <label className={css.signUp__label}>
          E-Mail
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={css.signUp__input}
            placeholder="E-Mail"
            required
          />
        </label>
        <label className={css.signUp__label}>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={css.signUp__input}
            placeholder="Password"
            required
          />
        </label>
        <button type="submit" className={css.signUp__btn}>
          Sign up
        </button>
      </form>
      <p className={css.signUp__text}>
        Already have an account?
        <a href="." className={css.signUp__link}>
          Log In
        </a>
      </p>
    </div>
  );
}
