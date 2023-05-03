import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../firebase.init';
const Registation = () => {
    const auth = getAuth(app);
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const { CreateAccount } = useContext(AuthContext)
    const handleCreateAccount = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        setError("")
        setSuccess('')
        CreateAccount(email, password)
            .then(result => {
                const account = result.user;
                console.log(account)
                setSuccess("Account created Successfully")
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                }).then(() => {
                    setSuccess("Account Update Successfully")
                }).catch((error) => {
                    setError(error)
                });
            })
            .catch(error => setError(error))



    }

    return (
        <div className='flex md:flex-row flex-col justify-center gap-5 items-center max-w-7xl mx-auto'>
            <div className='w-full mt-28'>

                <h2 className="text-5xl  fontScript">Welcome</h2>
                <p className="text-xl -mt-5  font2">to_ FoodMaker Registration page</p>
                <h2 className="text-2xl  mt-10 font2">“Not to be missed are our favorite Anthony Bourdain food and travel quotes. His understanding of people and culture while encouraging curiosity and adventure continue to inspire our culinary travels. ”</h2>
            </div>
            <form onSubmit={handleCreateAccount} className='flex flex-col gap-5 w-full mt-28'>
                <input name='name' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Name' type="text" required />
                <input name='image' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your image url' type="text" />

                <input name='email' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Email' type="email" required />
                <input name='password' className='max-w-96 w-full focus:outline-none py-2 px-3 bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Password' type="password" required />
                <p className='text-green-500 text-center'><small>{success}</small></p>
                <p className='text-red-500 text-center'><small>{error}</small></p>
                <button type='submit' className=' bg-opacity-20 bg-[#d6b6251e] py-2 font-semibold rounded-xl'>Registration</button>

                <p className='text-center'>if you have already an account ? please
                    <Link to={'/login'} className='text-yellow-400 hover:underline text-center'> sign in</Link>
                </p>
            </form>

        </div>
    );
};

export default Registation;