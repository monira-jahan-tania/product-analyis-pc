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
                    <p>Processor: Intel Celeron N4020 Dual Core (4MB Cache, 1.10 GHz Up To 2.80 GHz) Processor<br></br>
                        RAM: 4GB 2400MHz DDR4 <br />
                        Storage: 1TB SATA 5400RPM <br />
                        Display: 15.6" HD (1366 x 768) LED</p>
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