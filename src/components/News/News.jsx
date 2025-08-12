import { useState, useEffect } from 'react';
import css from './News.module.css';
import fetchNews from '../../services/getNewsContent';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetchNews('pets OR animals OR dogs OR cats OR wildlife', 10, 'en')
      .then(setArticles)
      .catch(console.error);
  }, []);

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleSeeLess = () => {
    setVisibleCount(4);
  }



  return (
    <section className={css.news__section}>
      <h2 className={css.news__title}>Interacting with our pets</h2>
      <ul className={css.news__list}>
        {articles.slice(0, visibleCount).map((article, index) => (
          <li key={index} className={css.news__item}>
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className={css.news__img}
              />
            )}

            <p className={css.news__text}>{article.title}</p>
          </li>
        ))}
      </ul>
      {visibleCount !== 12 && (
        <button onClick={handleSeeMore} className={css.news__btn} type="button">
          See more
        </button>
      )}
      {visibleCount === 12 && (
        <button onClick={handleSeeLess} className={css.news__btn} type="button">
          See less
        </button>
      )}

    </section>
  );
}
