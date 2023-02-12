import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';
let intro;
intro = {name:'shahjalal', age:20}
const Services = () => {
    const [services, setServices] = useState([])
    console.log(services,  'services')
    useEffect(function named(){
        const loader = async()=>{
            const fech = await fetch('http://localhost:5500/services?limit=10',{
                method:'DELETE', 
                headers:{
                    test:{intro}
                }
            })
            const data =await fech.json();
            setServices(data.servicesData)
            return data;
        }
          loader();
    },[])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
            {services.map((e, i, a)=>{
                console.log(e, i, a ,'eia')
                return <ServiceItem key={i}> {e}</ServiceItem>
            })}
        </div>
    );
};

export default Services;