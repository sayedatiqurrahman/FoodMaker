import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Recipes from '../Components/Recipes';
import { toast } from 'react-hot-toast';
import Loading from '../Components/Loading';

const ChefRecipes = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <Loading />
    }
    const chef = useLoaderData()

    const { chefPicture, chefName, bio, ratings, likes, yearsOfExperience, numberOfRecipes, thumbnail, recipes } = chef;
    const [booked, setBooked] = useState(false)
    const handleFavorite = () => {
        if (!booked) {
            toast.success('You Selected Booked this Chef!')
            setBooked(true);
        }
    }

    return (
        <>
            <div className='flex lg:flex-row mt-10 flex-col justify-center gap-5 mx-auto items-center max-w-4xl w-[90%]'>

                <img className='w-96 mx-auto  h-[500px] ml-auto rounded-lg shadow-md' src={chefPicture} alt="" />


                <div className="w-full font-normal  leading-6">

                    <h1 className='text-3xl font2'>{chefName}</h1>
                    <p>{bio}</p>

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
                    {/* Booking Chef Button */}
                    <button onClick={handleFavorite} disabled={booked && true} className={`w-full md:px-20  lg:px-32 py-3 border-l-2 lg:border-l-0 border-r-2 border-y-2  font-bold lg:text-xl font2 rounded-l-full lg:rounded-l-none rounded-r-full h-10 mt-5 -ml-5 flex justify-center items-center transition-all duration-200 drop-shadow-lg hover:shadow-lg ${booked ? 'text-gray-600 border-gray-500' : 'border-yellow-400 text-xl font2 text-yellow-500 hover:bg-yellow-400 hover:text-white'}`} >{booked ? 'Booked' : 'Book Now'}</button>


                </div>


            </div>
            <div className='relative py-5 text-center'>
                <hr className='border border-gray-500 rounded-lg my-10 max-w-3xl mx-auto w-[90%]' />
                <p className='font2 md:text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 textShadow2 bg-black'>All Recipes of {chefName} Are Here</p>
            </div>

            {/* recipies cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    recipes.map(recipe => <Recipes key={recipe.id} recipe={recipe} />)
                }
            </div>

        </>
    );
};

export default ChefRecipes;