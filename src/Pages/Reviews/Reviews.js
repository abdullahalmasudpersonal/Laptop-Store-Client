import React, { useEffect, useState } from 'react';
import Review from './Review';
import './Reviews.css';

const Reviews = () => {
    const [review, setReview] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);

    return (
        <div className='reviews pb-5'>
            <div className='container '>
            <h3 className='text-center pt-5 pb-5 '>Reviews</h3>
            <div className='reviews-map'>
                {
                    review.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
            </div>
        </div>
    );
};

export default Reviews;