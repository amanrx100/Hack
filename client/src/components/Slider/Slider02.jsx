import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import polo from '../../assets/polo1.jpg'
import "./Slider.css";
import "swiper/css/navigation";

// import required modules
import { Autoplay,Pagination } from "swiper";
import { Navigation } from "swiper";
import review from '../../assets/review.png'
export default function Slider02() {
  return (
    <>
      <div className="m-5 text-center">
        <h1>Customer Reviews</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}

        pagination={{
          clickable: true,
          // type: "fraction",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper w-75"
      >
        <SwiperSlide className="card">
          <div className="card border p-3 ">
            <div className="w-75   d-flex justify-content-center mx-auto">
              <img src={polo} alt="polo" />
            </div>
              <img src={review} alt="review" className="w-50 justify-content-center d-flex mx-auto mt-2"/>
            <p className="text-start mt-3 fs-6">"The T Shirt Is Quite Comfortable And The Fit Is Also Great Not Too Tight Not Too Loose...."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="card border p-3 ">
            <div className="w-75   d-flex justify-content-center mx-auto">
              <img src={polo} alt="polo" />
            </div>
              <img src={review} alt="review" className="w-50 justify-content-center d-flex mx-auto mt-2"/>
            <p className="text-start mt-3 fs-6">"The T Shirt Is Quite Comfortable And The Fit Is Also Great Not Too Tight Not Too Loose...."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="card border p-3 ">
            <div className="w-75   d-flex justify-content-center mx-auto">
              <img src={polo} alt="polo" />
            </div>
              <img src={review} alt="review" className="w-50 justify-content-center d-flex mx-auto mt-2"/>
            <p className="text-start mt-3 fs-6">"The T Shirt Is Quite Comfortable And The Fit Is Also Great Not Too Tight Not Too Loose...."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="card border p-3 ">
            <div className="w-75   d-flex justify-content-center mx-auto">
              <img src={polo} alt="polo" />
            </div>
              <img src={review} alt="review" className="w-50 justify-content-center d-flex mx-auto mt-2"/>
            <p className="text-start mt-3 fs-6">"The T Shirt Is Quite Comfortable And The Fit Is Also Great Not Too Tight Not Too Loose...."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="card border p-3 ">
            <div className="w-75   d-flex justify-content-center mx-auto">
              <img src={polo} alt="polo" />
            </div>
              <img src={review} alt="review" className="w-50 justify-content-center d-flex mx-auto mt-2"/>
            <p className="text-start mt-3 fs-6">"The T Shirt Is Quite Comfortable And The Fit Is Also Great Not Too Tight Not Too Loose...."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="card border p-3 ">
            <div className="w-75   d-flex justify-content-center mx-auto">
              <img src={polo} alt="polo" />
            </div>
              <img src={review} alt="review" className="w-50 justify-content-center d-flex mx-auto mt-2"/>
            <p className="text-start mt-3 fs-6">"The T Shirt Is Quite Comfortable And The Fit Is Also Great Not Too Tight Not Too Loose...."</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="card border p-3 ">
            <div className="w-75   d-flex justify-content-center mx-auto">
              <img src={polo} alt="polo" />
            </div>
              <img src={review} alt="review" className="w-50 justify-content-center d-flex mx-auto mt-2"/>
            <p className="text-start mt-3 fs-6">"The T Shirt Is Quite Comfortable And The Fit Is Also Great Not Too Tight Not Too Loose...."</p>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
