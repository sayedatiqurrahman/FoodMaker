import React, { useContext } from 'react';
import AllChef from '../Components/allChef';
import { DataContext } from '../App';

const Chefs = () => {
    const data = useContext(DataContext)
    return (
        <div className='text-center mt-5'>
            <h2 className="text-5xl  fontScript">Welcome</h2>
            <p className="text-xl -mt-5  font2">to_ Chefs World</p>
            <h2 className="text-2xl  mt-10 font2">All The Chefs At Your Fingertips</h2>
            <AllChef data={data} />
        </div>
    );
};

export default Chefs;