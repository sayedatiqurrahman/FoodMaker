import { Card } from 'flowbite-react';
import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt, FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { chefPicture, chefName, bio, ratings, likes, yearsOfExperience, numberOfRecipes } = chef

    return (

        <div className='max-w-sm  relative text-left'>
            <Card className='max-h-[550px] h-auto'
            >
                <img src={chefPicture} className='h-[300px] w-full p-[2px] rounded-lg absolute top-0  left-0' alt="" />


                <h5 className="text-2xl mt-[300px] font-bold tracking-tight text-gray-900 dark:text-white ">
                    {chefName}
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                    {bio.length > 80 ? <>{bio.slice(0, 80)}... </> : bio}
                    <p><b>Years of Experience: <span className='text-yellow-500'>{yearsOfExperience}</span> </b></p>
                    <p><b>Number of Recipes: <span className='text-yellow-500'>{numberOfRecipes}</span></b></p>
                    <div className='flex justify-between w-full'>
                        <p className='flex items-center gap-1'><FaThumbsUp /> <b>{likes}</b></p>

                        <p className=''>
                            <Rating className='ml-2 mr-1 text-amber-500'
                                placeholderRating={ratings}
                                readonly
                                emptySymbol={<FaStarHalfAlt />}
                                placeholderSymbol={<FaStar />}
                                fullSymbol={<FaStar />}
                            />
                            <b>{ratings}.00</b></p>
                    </div>

                    <Link to={`../chef/${chef.id}`} className="px-5 py-2  border-t-2 border-x-2 font-bold border-yellow-400 text-xl font2 text-yellow-500 hover:bg-yellow-400 hover:text-white rounded-t-full h-10 mt-5 flex justify-center items-center transition-all duration-200 drop-shadow-lg hover:shadow-lg">View Recipes</Link>

                </div>

            </Card>
        </div >

    );
};

export default ChefCard;