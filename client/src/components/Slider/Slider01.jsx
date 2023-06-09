import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useParams, useNavigate } from "react-router-dom";
import "swiper/css/navigation";


import "./Slider.css";

// import required modules
import {Autoplay, Pagination } from "swiper";
import { Navigation } from "swiper";



export default function Slider01() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [page, setPage] = useState(1);



    

    //get products
    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts(data.products);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        getAllProducts();
        
      }, []);

    return (
        <>
                <div className="m-5 text-center">
                    <h1>New Arrivals</h1>
                </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}

                pagination={{
                    clickable: true,
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-75"
                >
                {products?.map((p) => (
                    <SwiperSlide >
                        <div className="card my-5">
                            <div className="p-3 slider01">
                                <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                    onClick={() => navigate(`/product/${p.slug}`)}
                                />
                                <h4 className="fs-5 mt-5 mb-0 fw-semibold">{p.name.substring(0,20)}</h4>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}