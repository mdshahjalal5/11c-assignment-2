import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider';
import ReviewsRow from './ReviewsRow';

const MyReviews = () => {
    const navigate = useNavigate();
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
    const handlerDelete =async(e) => {
        const fetchRes = await fetch(`http://localhost:5500/review?id=${e._id}`,{
            method:"DELETE"
        })
        const fetchData = await fetchRes.json();
        console.log(fetchData, 'fetchData')
        if (fetchData.deletedCount){
            toast('Successfully Deleted', {autoClose:1000})
            const existingReview = myReviews.filter(ev => ev._id !== e._id);
            setMyReviews(existingReview)
        }
    }
    const handlerUpdate = async(e)=>{
        navigate(`/update/${e._id}`)
        console.log(e, 'func e')
        // const fetchRes = await fetch(`http://localhost:5500/review?id=${e._id}`, {
        //     method: "PUT"
        // })
        // const fetchData = await fetchRes.json();
        // console.log(fetchData, 'fetchData')
        // if (fetchData.modifiedCount) {
        //     toast('Successfully Updated', { autoClose: 1000 })
        // }
    }
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
                    <tbody className=''>
                        {myReviews.map((e, i, a) => { return <ReviewsRow key={i} e={e} handlerDelete={handlerDelete} handlerUpdate={handlerUpdate}></ReviewsRow> })}
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default MyReviews;