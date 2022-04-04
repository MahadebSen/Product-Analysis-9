import React from 'react';

const Review = (props) => {
    const {data} = props;
    const {img, name, rating, review} = data;
    return (
        <div className='flex justify-center items-center border-2 border-indigo-500 m-8 rounded-md'>
            <img className='w-[150px] rounded-lg flex justify-center items-center m-6' src={img} alt="" />
            <div className='text-left m-2'>
                <p className='text-lg font-medium'><q>{review}</q></p>
                <div className='my-3'>
                    <p><span className='font-semibold'>Name: </span> {name}</p>
                    <p><span className='font-semibold'>Rating: </span> {rating}</p>
                </div>
            </div>
            
        </div>
            
    );
};

export default Review;