import React from 'react';
import pic from '../../images/dell-laptop.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='banner'>
            <div className="product-details">
                <h1>Dell Laptop</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium doloremque recusandae deleniti? Eligendi necessitatibus culpa aspernatur rerum accusantium, ullam assumenda inventore? Excepturi natus, neque expedita ex porro autem quo?</p>
            </div>
            <div className="product-img">
                <img src={pic} alt='' />
            </div>
        </div>
    );
};

export default Home;