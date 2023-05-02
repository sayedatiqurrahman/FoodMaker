import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { Link } from "react-router-dom";
import ChefCard from "./ChefCard";

const AllChef = ({ data }) => {
    console.log(data)
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
                className="my-10 py-7  border-r-2 border-l-2 border-gray-500 myS"
            >
                {
                    data.map(chef => <SwiperSlide className="relative" key={chef.id}>
                        <img src={chef.chefPicture} alt="" />

                        <div className=" absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent flex inset-0">
                            <div className="pl-3  mt-auto flex justify-between w-full text-left">
                                <div>
                                    <h4 className="textShadow text-lg font-semibold">{chef.chefName}</h4>
                                    <p>Likes: {chef.likes}</p>
                                    <p>Ratings: {chef.ratings}.00</p>

                                </div>
                                <Link to={`chefRecipe/${chef.id}`} className="px-5 py-2 border-l-2 border-y-2 font-bold border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-l-full h-10 mt-5 flex items-center">Book Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>



            <br />
            <div>
                <h2 className="font2 text-2xl my-8">Choose Your Favourite Chef</h2>

                <div className="gird grid-cols-3 gap-4">
                    {
                        data.map(chef => <ChefCard key={chef.id} chef={chef} />)
                    }
                </div>
            </div>
        </div >
    );
};

export default AllChef;