import React from 'react';
import './testimonials.css';
import AVTR1 from "../../assets/sasha.jpg"
import AVTR2 from "../../assets/clemens.png"
import AVTR3 from "../../assets/emily.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Sasha Shevchenko',
    review: 'Piero is absolutely excellent, his a great partner he does everything more easier. I would definitely recommend'
  },
  {
    avatar: AVTR2,
    name: 'Clemens Grolman',
    review: 'Learning with Piero has been awesome and funny, he makes it all more bearable, he is a worker!'
  },
  {
    avatar: AVTR3,
    name: 'Emily Millard',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae sequi corporis hic, voluptate consequatur dignissimos beatae esse impedit natus, saepe voluptatibus est porro vitae tempora et accusantium. Est, maiores?'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
