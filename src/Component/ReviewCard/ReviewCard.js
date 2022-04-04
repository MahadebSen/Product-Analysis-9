import React from 'react';

const ReviewCard = ({item}) => {
    const {img, name, review, rating} = item;
    return (
        <div className='border-2 rounded-md border-blue-300 m-5 w-[400px] p-2'>
            <img className='  rounded-lg flex justify-center items-center' src={img} alt="" />
            <div>
                <p className='m-4 text-lg font-medium'>
                   <q>{review.length > 140 ? review.slice(0, 140) + "..." : review}</q></p>
                <div className='pb-4'>
                    <p className='text-red-600 font-bold'>{name}</p>
                    <p><span>Rating: </span>{rating}</p>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewCard;