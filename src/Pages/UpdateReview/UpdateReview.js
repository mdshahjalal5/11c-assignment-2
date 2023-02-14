import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const UpdateReview = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData();
    console.log(data, 'update ddata')
    return (
        <>
            <div>
                <h2>Update review</h2>
               
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
              
                <div className="card-body">
                    <label htmlFor="">Type new review</label>
                    <textarea defaultValue={data?.review} className="textarea textarea-secondary" placeholder="Bio"></textarea>
                    <input defaultValue={user?.email} readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">post update</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateReview;