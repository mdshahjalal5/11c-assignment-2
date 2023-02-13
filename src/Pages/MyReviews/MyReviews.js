import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    console.log(user, 'user', user?.email)
    useEffect(()=>{
        async function loader(){
            const fetchRes = await fetch(`http://localhost:5500/orders?email=${user?.email}`)
            const fetchData = await fetchRes.json()
            console.log(fetchData, 'fetch data ')
            setMyReviews(fetchData);            
        }
        const loaderReturn = loader()
    },[user?.email])
    return (
        <>
            <div className="overflow-x-auto sm:w-full md:w-3/4 mx-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label className='badge badge-ghost badge-sm'>
                                    Delete Option
                                </label>
                            </th>
                            <th>Review Message</th>
                            <th>Update Option </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    <button className='badge badge-ghost badge-sm p-4 '>Delete X</button>
                                </label>
                            </th>
                            <td>
                              Dada vaiya it's an awesome food 
                            </td>
                            <td><button className='font-bold badge badge-ghost badge-sm p-4 '>Update</button></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default MyReviews;