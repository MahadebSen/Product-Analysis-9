import React from 'react';
import useData from '../Custom Hooks/useData';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useData();
    return (
        <div>
            <p>This is reviews</p>
            <p>{reviews.length}</p>
            {
                reviews.map(item => <Review
                    key={item.id}
                    review={reviews}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;