import React from 'react';
import useData from '../Custom Hooks/useData';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useData();
    return (
        <div className='mt-8'>
            {
                reviews.map(item => <Review
                    key={item.id}
                    data={item}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;