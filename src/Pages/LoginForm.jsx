import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)
    return (
        <div className='flex justify-center gap-5 items-center max-w-7xl mx-auto'>
            <div className='w-full mt-28'>

                <h2 className="text-5xl  fontScript">Welcome</h2>
                <p className="text-xl -mt-5  font2">to_ FoodMaker Login page</p>
                <h2 className="text-2xl  mt-10 font2">“Tell me what you eat, and I will tell you who you are.” “So long as you have food in your mouth you have solved all questions for the time being.” “There is no sincere love than the love of food.” “If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.”</h2>
            </div>
            <form className='flex flex-col gap-5 w-full mt-28'>
            <input name='email' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Email' type="email" required/>
            
                <input name='password' className='max-w-96 w-full focus:outline-none py-2 px-3 bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Password' type="password" required />
                <p className='text-green-700 text-center'><small>{success}</small></p>
                <p className='text-red-700 text-center'><small>{error}</small></p>
                <button type='submit' className=' bg-opacity-20 bg-[#d6b6251e] py-2 font-semibold rounded-xl'>Login</button>
                <Link className='text-yellow-700 hover:underline text-center'>Forget Password</Link>


                <p className='text-center'>if you are new here ? please
                    <Link to={'/registation'} className='text-yellow-700 hover:underline text-center'> sign up</Link>
                </p>
            </form>

        </div>
    );
};

export default LoginForm;