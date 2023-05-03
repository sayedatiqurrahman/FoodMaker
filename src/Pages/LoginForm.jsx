import React, { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider';

const LoginForm = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const { SignIn, SignInWithGitHub, SignInWithGoogle } = useContext(AuthContext)
    // login
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        SignIn(email, password)
            .then((res) => {
                const login = res.user;
                setSuccess('Loged in successfully');
                navigate(location?.state?.pathname)
            })
            .catch(err => setError(err.message));
        form.reset()
    }
    // login with google
    const handleGoogle = () => {
        setError('')
        setSuccess('')
        SignInWithGoogle()
            .then(res => {
                const user = res.user
                setSuccess('Login with Google successfully')

            })
            .catch((err) => setError('Google:' + err))
    }
    // login with github
    const handleGithub = () => {
        setError('')
        setSuccess('')
        SignInWithGitHub()
            .then(res => {
                const user = res.user
                setSuccess('Login with GitHub successfully')
            })
            .catch((err) => setError('Github:' + err))
    }
    return (
        <div className='flex md:flex-row flex-col justify-center gap-5 items-center max-w-7xl mx-auto'>
            <div className='w-full mt-28'>

                <h2 className="text-5xl  fontScript">Welcome</h2>
                <p className="text-xl -mt-5  font2">to_ FoodMaker Login page</p>
                <h2 className="text-2xl  mt-10 font2">“Tell me what you eat, and I will tell you who you are.” “So long as you have food in your mouth you have solved all questions for the time being.” “There is no sincere love than the love of food.” “If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.”</h2>
            </div>
            <div className='w-full mt-28'>
                <form onSubmit={handleLogin} className='flex flex-col gap-5 '>
                    {/* Email Input */}
                    <input name='email' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Email' type="email" required />

                    {/* Password Input */}

                    <input name='password' className='max-w-96 w-full focus:outline-none py-2 px-3 bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Password' type="password" required />

                    {/* Error or Success Message */}
                    <p className='text-green-500 text-center'><small>{success}</small></p>
                    <p className='text-red-500 text-center'><small>{error}</small></p>

                    {/* Submit Button */}
                    <button type='submit' className=' bg-opacity-20 bg-[#d6b6251e] py-2 font-semibold rounded-xl'>Login</button>
                    <Link className='text-yellow-700 hover:underline text-center'>Forget Password</Link>


                    <p className='text-center'>if you are new here ? please
                        <Link to={'/registation'} className='text-yellow-700 hover:underline text-center'> sign up </Link>  <span className='font2 text-center '> / Login With</span>
                    </p>
                </form>



                <div className='mt-5 flex flex-wrap justify-center items-center gap-5'>
                    <button onClick={handleGoogle} className='drop-shadow-md transition-all duration-200 border-2 border-yellow-400 px-20 rounded-full text-lg font-bold py-2 mt-4 bg-yellow-700 hover:bg-yellow-400 hover:text-black '>Google</button>
                    <button onClick={handleGithub} className='drop-shadow-md transition-all duration-200 border-2 border-yellow-400 px-20 rounded-full text-lg font-bold py-2 mt-4 bg-yellow-700 hover:bg-yellow-400 hover:text-black '>Github</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;