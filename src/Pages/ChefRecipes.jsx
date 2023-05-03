import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Components/Recipes';
import { toast } from 'react-hot-toast';

const ChefRecipes = () => {
    const chef = useLoaderData()
    console.log(chef)
    const { chefPicture, chefName, bio, ratings, likes, yearsOfExperience, numberOfRecipes, thumbnail, recipes } = chef;
    const [booked, setBooked] = useState(false)
    const handleFavorite = () => {
        if (!booked) {
            toast.success('You Selected Booked this Chef!')
            setBooked(true);
        } else {
            toast.error('You are already Booked this Chef!')
        }
    }

    return (
        <>
            <div className='flex md:flex-row mt-10 flex-col justify-center gap-5 mx-auto items-center max-w-7xl w-[90%]'>
                <div className='w-1/2 h-[500px]'>
                    <img className='w-96 h-full ml-auto rounded-lg shadow-md' src={chefPicture} alt="" />
                </div>

                <div className="w-1/2 font-normal  leading-6">
                    <h1 className='text-3xl font2'>{chefName}</h1>

                    {bio}
                    <p><b>Years of Experience: <span className='text-yellow-500'>{yearsOfExperience}</span> </b></p>
                    <p><b>Number of Recipes: <span className='text-yellow-500'>{numberOfRecipes}</span></b></p>
                    <div className='flex justify-between max-w-xs w-full mt-3'>
                        <p className='flex items-center gap-1'><FaThumbsUp /> <b>{likes}</b></p>

                        <p className=''> <b>Rating:</b>
                            <Rating className='ml-2 mr-1 text-amber-500'
                                placeholderRating={ratings}
                                readonly
                                emptySymbol={<FaStarHalfAlt />}
                                placeholderSymbol={<FaStar />}
                                fullSymbol={<FaStar />}
                            />
                            <b>{ratings}.00</b> </p>
                    </div>

                    <button onClick={handleFavorite} disabled={booked && true} className={`px-32 py-3  border-r-2 border-y-2 font-bold  text-xl font2  rounded-r-full h-10 mt-5 -ml-5 flex justify-center items-center transition-all duration-200 drop-shadow-lg hover:shadow-lg ${booked ? 'text-gray-600 border-gray-500' : 'border-yellow-400 text-xl font2 text-yellow-500 hover:bg-yellow-400 hover:text-white'}`} >{booked ? 'Booked' : 'Book Now'}</button>


                </div>


            </div>
            <div className='relative'>
                <hr className='border border-gray-500 rounded-lg my-10 max-w-3xl mx-auto w-[90%]' />
                <p className='font2 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black'>All Recipes of {chefName} Are Here</p>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                {
                    recipes.map(recipe => <Recipes key={recipe.id} recipe={recipe} />)
                }
            </div>

        </>
    );
};

export default ChefRecipes;