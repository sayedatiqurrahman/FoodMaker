import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center '>
            <Link to={'/'}>
                <img className='h-24 mx-auto ' src="https://i.ibb.co/JHcw0GL/1-image-removebg-preview-1.png" alt="" />
            </Link>
            <p className='-mt-8 textShadow '>Copyright © 2023 FoodMaker, Inc.</p>
        </div>
    );
};

export default Footer;