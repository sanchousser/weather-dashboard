import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import css from './SwiperSection.module.css';

export default function SwiperSection({ images }) {
  return (
    <section className={css.swiper__section}>
      <h2 className={css.swiper__title}>Beautiful nature</h2>
      <Swiper
        modules={[EffectCoverflow]}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <img
              className={css.swiper__img}
              src={image.webformatURL}
              alt="nature"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
