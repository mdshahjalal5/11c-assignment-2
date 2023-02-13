import React from 'react';

const ReviewsRow = (e) => {
    console.log(e, 'e');
    const { handlerDelete } =  e
    return (
        <tr className='mb-2'>
            <th>
                <label>
                    <button onClick={()=>handlerDelete(e.e)} className='badge badge-ghost badge-sm p-4 '>Delete X</button>
                </label>
            </th>
            <td >
                <p className='badge badge-ghost badge-sm p-4 font-bold  rounded-md'>{e?.e?.review}</p> 
            </td>
            <td><button className='font-bold badge badge-ghost badge-sm p-4 '>Update</button></td>
        </tr>
    );
};

export default ReviewsRow;