import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = (any) => {
    const { _id, name, price, ratings, img } = any.e
    return (
        <div data-aos="flip-left" className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button  className="btn btn-primary capitalize">View Details</button>
                </div>
                <Link to={`/service/${_id}`}>Details</Link>
            </div> 
        </div>
    );
};

export default ServiceItem;