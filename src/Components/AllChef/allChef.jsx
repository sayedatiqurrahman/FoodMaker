import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./allChef.css";

// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ChefCard from "../ChefCard";
// Lazy loading
import { LazyLoadImage } from "react-lazy-load-image-component";

const AllChef = ({ data }) => {
    return (
        <div className="">
            {/* Swiper js */}
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="my-10 py-7  border-r-2 border-l-2 border-gray-500"
            >
                {/* Chef Data Maping */}
                {
                    data?.map(chef => <SwiperSlide className="relative h-[400px] min-w-[320px]" key={chef.id}>
                        {/* Lazy Loader */}
                        <LazyLoadImage
                            effect="blur"
                            className="w-[350px] h-[350px]" src={chef.chefPicture}
                            placeholderSrc={'../../assets/logo.png'}
                            alt="" />

                        <div className=" absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent flex inset-0">
                            <div className="pl-3  mt-auto flex justify-between w-full text-left">
                                <div>
                                    {/* Chef Name */}
                                    <h4 className="textShadow text-lg font-semibold">{chef.chefName}</h4>
                                    <p>Likes: <>{chef.likes}</></p>

                                    {/* Ratings */}

                                    <p className=''>
                                        <Rating className=' mr-1 text-amber-500'
                                            placeholderRating={chef.ratings}
                                            readonly
                                            emptySymbol={<FaStarHalfAlt />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        />
                                        {chef.ratings}.00</p>

                                </div>
                                {/* View Recipes Button || Link */}
                                <Link to={`../chef/${chef.id}`} className="px-5 py-2 border-l-2 border-y-2 font-bold border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-l-full h-10 mt-5 flex items-center">View Recipes</Link>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>



            <br />
            <div>
                {/* Chef Cards */}
                <h2 className="font2 text-2xl my-8">Choose Your Favourite Chef</h2>

                <div className="grid xl:grid-cols-3 md:grid-cols-2 justify-center items-center gap-5">
                    {
                        data.map(chef => <ChefCard key={chef.id} chef={chef} />)
                    }
                </div>
            </div>
        </div >
    );
};

export default AllChef;