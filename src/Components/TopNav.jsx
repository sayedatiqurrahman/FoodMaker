import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { GiCrossedBones } from "react-icons/gi";
import Tooltip from '@mui/material/Tooltip';
import { AuthContext } from './AuthProvider';
const TopNav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [showMenu, setShowMenu] = useState(false)

    const { displayName, email, photoURL } = user || "";

    return (
        <>
            {/* Large Screen Navebar */}
            <div className='hidden md:flex justify-between font-semibold'>
                <div>
                    <Link to='/' className='text-2xl flex'>
                        <img className='w-10' src="https://i.ibb.co/JHcw0GL/1-image-removebg-preview-1.png" alt="logo" />
                        FoodMaker</Link>
                </div>
                <div className='flex gap-5'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to={'/chefs'}>Chefs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to={'/blog'}>Blog</NavLink>

                </div>
                <div>
                    {user ? <div className='flex gap-3 flex-wrap'>
                        <button onClick={() => logOut()} >Log out</button>
                        <img className='h-10 w-10 border border-gray-300 rounded-full' src={photoURL || `https://i.ibb.co/Rbqk5W0/image.png`} title={displayName || `User Name`} alt="" />
                    </div>
                        : <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to={'/login'} >Login</NavLink>
                    }

                </div>
            </div>
            {/* Phone Navbar */}
            <div className='md:hidden  mt-5 shadow-lg pb-4 rounded-lg'>
                <div className='flex justify-between mx-auto items-center   w-[97%]'>
                    <div>
                        <img className='h-10 w-10 border border-gray-300 rounded-full' src={photoURL || `https://i.ibb.co/Rbqk5W0/image.png`} title={displayName || `User Name`} alt="" />
                    </div>

                    <Link to='/' className='font-bold flex items-center '>
                        <img className='w-10' src="https://i.ibb.co/s9V1Xmc/1-image-removebg-preview.png" alt="logo" />
                        FoodMaker</Link>

                    <div className=' text-2xl'>
                        {
                            !showMenu ? <HiMenuAlt3 onClick={() => setShowMenu(true)} /> : <GiCrossedBones onClick={() => setShowMenu(false)} />
                        }

                    </div>
                </div>

                {
                    showMenu ? <div className='flex flex-col justify-center items-center  gap-5'>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to={'/chefs'}>Chefs</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to={'/blog'}>Blog</NavLink>
                        {user ? <button onClick={() => logOut()} >Log out</button> : <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to={'/login'} >Login</NavLink>}
                    </div> : ''
                }
            </div>
        </>
    );
};

export default TopNav;