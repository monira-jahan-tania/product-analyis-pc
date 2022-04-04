import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Customerreview from '../Customerreview/Customerreview';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='review-cards'>
            {
                reviews.map(review => <Customerreview
                    key={review.id}
                    review={review}
                ></Customerreview>)
            }
        </div>
    );
};

export default Reviews;