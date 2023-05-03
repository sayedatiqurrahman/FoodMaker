import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Customers.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Customers = ({ customers }) => {

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                {customers?.map((customer) => <SwiperSlide key={customer.id} className="relative rounded-lg  shadow-md text-center">
                    <div className="absolute w-[90%] mb-5 top-2 left-1/2 -translate-x-1/2">
                        <LazyLoadImage effect="blur" className="border-2 mb-2 mx-auto border-gray-500 rounded-full " style={{ height: '100px', width: '100px', display: 'block' }} src={customer.image} />
                        <h2 className="text-gray-500 font2 text-3xl">{customer.customerName}</h2>

                        <h2 className="text-gray-500 font2 mt-5">"{customer.customerComment}"</h2>
                    </div>
                </SwiperSlide>)}


            </Swiper>
        </>
    );
};

export default Customers;