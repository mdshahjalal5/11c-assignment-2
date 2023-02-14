import React from 'react';
const OthersReview = ({e}) => {
    const {mail, review} = e;
    return (
        < div className='border-2 border-gray-500 rounded-lg m-1 shadow-md'>
            <h2> user <b className='font-bold'> {mail}</b> </h2>
            <p> {review} </p>            
        </div>
    );
};

export default OthersReview;