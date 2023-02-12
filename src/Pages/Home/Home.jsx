import React, { useEffect, useState } from 'react';
import ServiceItem from '../Services/ServiceItem';
import Banner from './Banner';

const Home = () => {
    const [services, setServices] = useState([])
    console.log(services, 'services')
    useEffect(function named() {
        const loader = async () => {
            const fech = await fetch('http://localhost:5500/services?limit=3', {
                method: 'GET',
                headers: {
                    test: { intro:'shahjalal'}
                }
            })
            const data = await fech.json();
            setServices(data.servicesData)
            return data;
        }
        loader();
    }, [])

    return (
     <>
            <h2>this is homepage</h2>
            <div className='bg-gray-400'> <Banner></Banner></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
                {services.map((e, i, a) => <ServiceItem key={i} e={e}> </ServiceItem>)}
            </div>
     </>
    );
};

export default Home;