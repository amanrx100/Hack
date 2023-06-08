import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import './slider.css'
// import './slider.css'
// import './slider.css'
// import './slider.css'
// import './slider.css'
// import './slider.css'
import './slider.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AWS from "../../src/assets/Dev-AWS-Navy.jpg"
import Tester from "../../src/assets/Dev-Instant-QA-Tester.jpg"
import Nextjs from "../../src/assets/Dev-Next.JS-Web.jpg"
import Tensorflow from "../../src/assets/Developer-TensorFlow-ML.jpg"
import DevOps from "../../src/assets/Devops-Engineer1.jpg"
import {MdOutlineArrowLeft} from 'react-icons'


import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Slider = () => {
  return (
    <div className="container1">
    <h1 className="heading">Flower Gallery</h1>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src={AWS} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Tester} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Nextjs} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Tensorflow} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={DevOps} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={AWS} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={DevOps} alt="slide_image" />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}

export default Slider