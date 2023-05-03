import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import toast from 'react-hot-toast';
import { useNavigation } from 'react-router-dom';
import Loading from './Loading';
// Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Recipes = ({ recipe }) => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <Loading />
    }
    const { name, image, ingredients, cookingMethod, likes, ratings } = recipe;

    const [favorite, setFavorite] = useState(false)

    const handleFavorite = () => {
        if (!favorite) {
            toast.success('You Selected this as favourite!')
            setFavorite(true);
        } else {
            toast.error('You already Selected this!')
        }
    }
    return (



        <div className='relative text-left'>
            <Card className=''
            >
                <LazyLoadImage effect='blur' src={image} className='LazyLoadImage h-[300px]  w-full rounded-lg absolute -top-10 left-0 bg-white p-1 ' alt=""
                    placeholderSrc={'../assets/logo.png'}
                />


                <h5 className="text-2xl mt-[300px] font-bold tracking-tight text-gray-900 dark:text-white ">
                    {name}
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                    <p> <b>Ingredients: </b> {ingredients.join(', ')}</p>
                    <p><b>Cooking Method: </b> {cookingMethod}</p>
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
                            <b>{ratings}</b></p>
                    </div>


                </div>
                {/* Button */}
                <button onClick={handleFavorite} disabled={favorite && true} className={`px-5 py-2  border-t-2 border-x-2 font-bold  rounded-t-full h-10 -mb-7 flex justify-center items-center transition-all duration-200 drop-shadow-lg hover:shadow-lg ${favorite ? 'text-gray-600 border-gray-500' : 'border-yellow-400 text-xl font2 text-yellow-500 hover:bg-yellow-400 hover:text-white'}`}  >Favourite</button>
            </Card>
        </div >


    );
};

export default Recipes;