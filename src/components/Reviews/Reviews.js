import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Customerreview from '../Customerreview/Customerreview';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch('reviews.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])

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