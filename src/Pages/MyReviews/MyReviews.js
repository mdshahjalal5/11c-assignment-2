import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider';
import UseTittle from '../../utils/UseTittle';
import ReviewsRow from './ReviewsRow';

const MyReviews = () => {
    UseTittle('My Reviews')
    const navigate = useNavigate();
    const {user} = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    const [loading, setLoading ] = useState('')
    useEffect(()=>{
        async function loader(){
            setLoading('truthy')            
            const fetchRes = await fetch(`http://localhost:5500/orders?email=${user?.email}`)
            const fetchData = await fetchRes.json()
            setLoading('')
            setMyReviews(fetchData);            
        }
        if(user?.email){
            loader()
        }
    },[user?.email])
    const handlerDelete =async(e) => {
        const fetchRes = await fetch(`http://localhost:5500/review?id=${e._id}`,{
            method:"DELETE"
        })
        const fetchData = await fetchRes.json();
        if (fetchData.deletedCount){
            toast('Successfully Deleted', {autoClose:1000})
            const existingReview = myReviews.filter(ev => ev._id !== e._id);
            setMyReviews(existingReview)
        }
    }
    const handlerUpdate = async(e)=>{
        navigate(`/update/${e._id}`)
    }
    return (
        <>
            {loading ? <>
                <div className="flex justify-center items-center    ">
                    <div className="spinner-border border-red-500 animate-spin inline-block w-16 h-16 border-4 rounded-full text-blue-600" role="status">
                    </div>
                </div>

            </>:''}
            {myReviews.length? 
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
                        <tbody className=''>
                            {myReviews.map((e, i, a) => { return <ReviewsRow key={i} e={e} handlerDelete={handlerDelete} handlerUpdate={handlerUpdate}></ReviewsRow> })}
                        </tbody>

                    </table>
                </div>
            :`
                
            `}
           
        </>
    );
};

export default MyReviews;