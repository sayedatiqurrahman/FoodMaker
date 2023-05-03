import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import { DataContext } from '../App';
import AllChef from '../Components/AllChef/allChef';
import Customers from '../Components/Customers/Customers';
import Contact from '../Components/Contact';
import { useNavigation } from 'react-router-dom';
import Loading from '../Components/Loading';
const Home = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <Loading />
    }
    const data = useContext(DataContext)
    const [customers, setCustomers] = useState(null)
    // fetch data
    useEffect(() => {
        fetch('https://server-side-atiqurrahman.vercel.app/customer')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, [])

    return (
        <div>
            <Header />
            {/* All Chefs Data from here */}
            <div className="my-[130px] text-center ">
                <h2 className="text-2xl  font2">All The Chefs At Your Fingertips</h2>
                <AllChef data={data} />

                {/* Customer section */}
                <div className='my-[130px]'>
                    <h2 className="text-3xl  font2">What Customers Are Saying
                        About Us</h2>
                    <div className='relative my-5'>
                        <hr className='w-72 border border-gray-500 mx-auto ' />
                        <p className='absolute -top-5  bg-black left-1/2 -translate-x-1/2 
                      text-7xl font-thin  rotate-12'>"</p>
                    </div>
                    <h2 className="text-xl mt-16 font2">We pride ourselves on what our happy
                        clients say.</h2>

                    <Customers customers={customers} />
                </div>
            </div>




            <div className='mb-[130px]'>
                {/* contact component */}
                <Contact />
            </div>
        </div>
    );
};

export default Home;