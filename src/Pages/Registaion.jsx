
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../firebase.init';
import { useState } from 'react';
import { useContext } from 'react';
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


        // Password validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please use At least one Uppercase Latter')
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please use At least one Special character')
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please use At least two numbers')
            return;
        } else if (!/(?=.*[a-z])/.test(password)) {
            setError('Please use At least one lowercase Latter')
            return;
        } else if (password.length < 8) {
            setError('Password must be at least 8 characters')
            return;
        }


        // Clear message
        setError("")
        setSuccess('')
        // Create || Register account
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
                    setError(error.message)
                });
            })
            .catch(error => setError(error.message))



    }

    return (
        <div className='flex md:flex-row flex-col justify-center gap-5 items-center max-w-7xl mx-auto'>
            <div className='w-full mt-28'>

                <h2 className="text-5xl  fontScript">Welcome</h2>
                <p className="text-xl -mt-5  font2">to_ FoodMaker Registration page</p>
                <h2 className="text-2xl  mt-10 font2">“Not to be missed are our favorite Anthony Bourdain food and travel quotes. His understanding of people and culture while encouraging curiosity and adventure continue to inspire our culinary travels. ”</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleCreateAccount} className='flex flex-col gap-5 w-full mt-28'>
                {/* Name Input */}
                <input name='name' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Name' type="text" required />

                {/* Image Input */}

                <input name='image' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your image url' type="text" />

                {/* Email Input */}

                <input name='email' className=' focus:outline-none py-2 px-3  bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Email' type="email" required />

                {/* Password Input */}

                <input name='password' className='max-w-96 w-full focus:outline-none py-2 px-3 bg-[#d6b6251e] rounded-lg' placeholder='Enter Your Password' type="password" required />

                {/* Success or Error Message */}
                <p className='text-green-500 text-center'><small>{success}</small></p>
                <p className='text-red-500 text-center'><small>{error}</small></p>
                {/* Submit Button */}
                <button type='submit' className=' bg-opacity-20 bg-[#d6b6251e] py-2 font-semibold rounded-xl'>Registration</button>

                <p className='text-center'>if you have already an account ? please
                    <Link to={'/login'} className='text-yellow-400 hover:underline text-center'> sign in</Link>
                </p>
            </form>

        </div>
    );
};

export default Registation;