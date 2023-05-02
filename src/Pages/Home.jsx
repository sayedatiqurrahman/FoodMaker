import React, { useContext } from 'react';
import Header from '../Components/Header';
import { DataContext } from '../App';
import AllChef from '../Components/allChef';

const Home = () => {
    const data = useContext(DataContext)
    console.log(data)
    return (
        <div>
            <Header />
            <div className="my-[130px] text-center ">
                <h2 className="text-2xl  font2">All The Chefs At Your Fingertips</h2>
                <AllChef data={data} />
            </div>

        </div>
    );
};

export default Home;