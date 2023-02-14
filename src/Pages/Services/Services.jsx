import React, { useEffect, useState } from 'react';
import UseTittle from '../../utils/UseTittle';
import ServiceItem from './ServiceItem';
let intro;
intro = {name:'shahjalal', age:20}
const Services = () => {
    UseTittle('Services')
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)
   
    useEffect(function named(){
        const loader = async()=>{
            setLoading(true)
            const fech = await fetch('https://11s-assignment.vercel.app/services?limit=10',{
                method:'GET', 
                headers:{
                    test:{intro}
                }
            })
            const data =await fech.json();
            setServices(data.servicesData)
            setLoading(false)
            return data;
        }
          loader();
    },[])
    return (
       <>
        <div>
                {loading ? <>
                    <div className="flex justify-center items-center    ">
                        <div className="spinner-border border-red-500 animate-spin inline-block w-16 h-16 border-4 rounded-full text-blue-600" role="status">
                        </div>
                    </div>
                </> :' '}
        </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
                {services.map((e, i, a) => {

                    return <ServiceItem key={i} e={e}> </ServiceItem>
                })}
            </div>
       </>
    );
};

export default Services;