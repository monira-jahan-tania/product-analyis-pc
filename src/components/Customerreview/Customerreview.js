import React, { useEffect, useState } from 'react';
import './Customerreview.css'

const Customerreview = (props) => {
    const { id, name, img, ratings, words } = props.review
    return (

        <div className='review-card'>
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>ratings: {ratings}</p>
            <p>{words}</p>

        </div>

    );
};

export default Customerreview;