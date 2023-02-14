import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider';

const UpdateReview = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData();
    console.log(data, 'update ddata')
    const handlerUpdate = async (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        console.log(review, 'review')
        console.log(e, 'func e')
        const fetchRes = await fetch(`http://localhost:5500/review?id=${data._id}`, {
            method: "PUT", 
        headers:{
            'content-type':'application/json', 
        },
            body: JSON.stringify({ review })
        })
        const fetchData = await fetchRes.json();
        console.log(fetchData, 'fetchData')
        if (fetchData.modifiedCount> 0) {
            toast('Successfully Updated', { autoClose: 1000 })
            e.target.reset()            
        }
    }
    return (
        <>
            <div>
                <h2>Update review</h2>
               
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
              
                <form onSubmit={handlerUpdate} className="card-body">
                    <label htmlFor="">Type new review</label>
                    <textarea name='review' required defaultValue={data?.review} className="textarea textarea-secondary" placeholder="New Review"></textarea>
                    <input defaultValue={user?.email} readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                    <div className="card-actions justify-end">
                        <button type='submit'  className="btn btn-primary">post update</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateReview;