import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import pic from '../../images/dell-laptop.jpg'
import Customerreview from '../Customerreview/Customerreview';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const review3 = reviews.slice(0, 3);

    return (
        <div className="home">
            <div className='banner'>
                <div className="product-details">
                    <h1>Dell Laptop</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium doloremque recusandae deleniti? Eligendi necessitatibus culpa aspernatur rerum accusantium, ullam assumenda inventore? Excepturi natus, neque expedita ex porro autem quo?</p>
                </div>
                <div className="product-img">
                    <img src={pic} alt='' />
                </div>
            </div>
            <div className='review'>
                <div>
                    <h1>Customers Reviews</h1>
                    <div className='review-3'>
                        {

                            review3.map(review => <Customerreview
                                key={review.id}
                                review={review}
                            ></Customerreview>)
                        }
                    </div>
                    <Link to='/reviews'><button className='review-btn'>See all reviews</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;