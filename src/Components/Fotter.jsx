import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center mt-[130px] pt-[130px]'>
            <hr className='border-gray-600' />
            <h1 className='pt-[130px] fontScript '>Newsletter
            </h1>
            <div className='relative mb-10'>
                <hr className='w-72 -mt-12 border border-gray-500 mx-auto ' />
                <p className='absolute -top-5  bg-black left-1/2 -translate-x-1/2 
                      text-7xl font-thin  rotate-12'>"</p>
            </div>
            <p className='font2 text-lg mb-7'>Subscribe to our mailing list</p>

            <div className='relative mx-auto mb-20 w-full sm:w-96 md:w-[500px]'>
                <input required className='h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 border-gray-500 rounded-full' type="email" placeholder='Enter Your Email' />
                <button className='absolute -top-4  right-0 drop-shadow-md transition-all duration-200 border-2 border-gray-400 px-10 rounded-full text-lg font-bold py-1 mt-4 bg-gray-700 hover:bg-gray-400 hover:text-gray-900' type="submit">Subscribe</button>
            </div>


            <div className='pb-[130px] gap-5 max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4'>
                <ul>
                    <li className='text-xl font2'>Menu</li>
                    <li>Private Chef</li>
                    <li>Catering</li>
                    <li>About</li>

                </ul>
                <ul>
                    <li className='text-xl font2'>Catering</li>
                    <li>Corporate Events</li>
                    <li>Weddings And Galas</li>
                    <li>Special Events</li>
                    <li>Cooking Classes</li>
                </ul>
                <ul>
                    <li className='text-xl font2'>Contacts</li>
                    <li>1122 Potter Rd, Antelope</li>
                    <li>info@example.com</li>
                    <li>18881234567</li>

                </ul>
                <ul>
                    <li className='text-xl font2'>Social</li>
                    <li>Facebook</li>
                    <li>Behance</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <hr className='border-gray-700' />
            <Link to={'/'}>
                <LazyLoadImage
                    effect='blur'
                    className='h-24 mx-auto ' src="https://i.ibb.co/JHcw0GL/1-image-removebg-preview-1.png"
                    alt="" />
            </Link>
            <p className='-mt-8 textShadow '>Copyright © 2023 FoodMaker, Inc.</p>
        </div>
    );
};

export default Footer;