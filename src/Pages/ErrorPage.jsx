import React from 'react';
import animation from '../assets/404E.gif';

import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
        <div className='flex flex-col h-[calc(100vh-150px)] justify-center items-center'>
            <img src={animation} alt="" />
            {/* <img className='absolute bottom-20 -left-20 rotate-45' src={animation2} alt="" /> */}
            <h1 className='text-[100px] fontScript'>{status}</h1>
            <p className='font2 -mt-8'>{error?.message || 'Unknown Error'}</p>
        </div>
    );
};

export default ErrorPage;