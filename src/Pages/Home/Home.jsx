import React, { useEffect, useState } from 'react';

const Home = () => {
    const [services, setServices] = useState([])
    console.log(services, 'services')
    useEffect(function named() {
        const loader = async () => {
            const fech = await fetch('http://localhost:5500/services?limit=10', {
                method: 'DELETE',
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
        <div>
            <h2>this is homepage</h2>
        </div>
    );
};

export default Home;