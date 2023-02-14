import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = (any) => {
    const { _id, name, price, ratings, img, details } = any.e

    return (
        <div data-aos="flip-left" className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0,100)} </p>
                <div className="card-actions">
                    <Link to={`/service/${_id}`}> <button className="btn btn-primary capitalize">View Details</button></Link>
                </div>
            </div> 
        </div>
    );
};

export default ServiceItem;