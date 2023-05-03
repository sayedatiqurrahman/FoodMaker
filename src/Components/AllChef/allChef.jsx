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

const AllChef = ({ data }) => {
    return (
        <div className="">
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
                {
                    data?.map(chef => <SwiperSlide className="relative min-w-[320px]" key={chef.id}>
                        <img className="w-full h-full" src={chef.chefPicture} alt="" />

                        <div className=" absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent flex inset-0">
                            <div className="pl-3  mt-auto flex justify-between w-full text-left">
                                <div>
                                    <h4 className="textShadow text-lg font-semibold">{chef.chefName}</h4>
                                    <p>Likes: <b>{chef.likes}</b></p>

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
                                <Link to={`../chef/${chef.id}`} className="px-5 py-2 border-l-2 border-y-2 font-bold border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-l-full h-10 mt-5 flex items-center">View Recipes</Link>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>



            <br />
            <div>
                <h2 className="font2 text-2xl my-8">Choose Your Favourite Chef</h2>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-5">
                    {
                        data.map(chef => <ChefCard key={chef.id} chef={chef} />)
                    }
                </div>
            </div>
        </div >
    );
};

export default AllChef;