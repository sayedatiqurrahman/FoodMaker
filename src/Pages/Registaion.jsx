import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Registation = () => {
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)
    return (
        <div className='flex justify-center gap-5 items-center max-w-7xl mx-auto'>
            <div className='w-full mt-28'>

                <h2 className="text-5xl  fontScript">Welcome</h2>
                <p className="text-xl -mt-5  font2">to_ FoodMaker Registration page</p>
                <h2 className="text-2xl  mt-10 font2">“Not to be missed are our favorite Anthony Bourdain food and travel quotes. His understanding of people and culture while encouraging curiosity and adventure continue to inspire our culinary travels. ”</h2>
            </div>
            <form className='flex flex-col gap-5 w-full mt-28'>
                <input name='text' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Name' type="text" required/>
                <input name='image' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your image url' type="text"/>

                <input name='email' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Email' type="email" required/>
                <input name='password' className='max-w-96 w-full focus:outline-none py-2 px-3 bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Password' type="password" required/>
                <p className='text-green-700 text-center'><small>{success}</small></p>
                <p className='text-red-700 text-center'><small>{error}</small></p>
                <button type='submit' className=' bg-opacity-20 bg-[#d6b6251e] py-2 font-semibold rounded-xl'>Login</button>

                <p className='text-center'>if you have already an account ? please
                    <Link to={'/login'} className='text-yellow-400 hover:underline text-center'> sign in</Link>
                </p>
            </form>

        </div>
    );
};

export default Registation;