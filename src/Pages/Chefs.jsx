import React, { useContext } from 'react';
import { DataContext } from '../App';
import AllChef from '../Components/AllChef/allChef';
import { useNavigation } from 'react-router-dom';

const Chefs = () => {
    // loading functionality
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <Loading />
    }
    const data = useContext(DataContext)
    return (
        <div className='text-center mt-5'>
            <h2 className="text-5xl  fontScript">Welcome</h2>
            <p className="text-xl  md:-mt-10  font2">to_ Chefs World</p>
            <h2 className="text-2xl  mt-10 font2">All The Chefs At Your Fingertips</h2>
            <AllChef data={data} />
        </div>
    );
};

export default Chefs;