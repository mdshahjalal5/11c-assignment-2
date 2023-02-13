import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider';

const ServiceDetails = () => {
    const {  user } = useContext(AuthContext)
    const {_id, name, price, ratings, img}= useLoaderData();
    const addRiviewHandler = async (form) => {
        const userPhoto = user?.photoURL;
        console.log(form, 'form')
        let mail, review; 
        review = form.review.value;
        mail =form.email.value ;
        const ReviewData = {
            review, mail, serviceId:_id, userPhoto,
        }
        console.log(ReviewData, 'r data')
         fetch(`http://localhost:5500/orders`,{
            method:"POST", 
            headers:{
                'content-type':'application/json',
                ReviewData,
            }, 
            body:JSON.stringify(ReviewData)
        }).then(res => res.json())
            .then(data => {
                console.log(data, 'data')
                if (data?.acknowledged){
                    toast('Ordered successful')
                }
            })
        if(!user?.email){
            toast('Login first to review' , {autoClose:1000})
            return;
        }
    }
    return (
     <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            <div data-aos="flip-left" className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className='font-bold'>Price: {price} </h2>
                    <p className='font-bold'> Ratings: {ratings} </p>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary capitalize">Order Now</button>
                    </div>
                </div>
            </div> 
            <div className="card w-96 bg-base-100 shadow-xl border-4">
               <h2 className='text-2xl'> Others Riviews</h2>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border-4">
                <h2 className='text-2xl'>Add review</h2>
                <form onSubmit={(a)=>{
                    a.preventDefault();
                    addRiviewHandler(a.target)
                }}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea name='review'  type="text" placeholder="Review" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  name='email' defaultValue={user?.email} readOnly type="text" placeholder="email" className="input input-bordered" />
                      
                    </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Post Review</button>
                </div>
                </form>
            </div>
          
     </div> 
       );
};

export default ServiceDetails;