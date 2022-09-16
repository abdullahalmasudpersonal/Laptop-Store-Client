import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { name, description, img, title, font1, font2, font3, font4, font5 } = review;

    return (
        <div>
            <div className='container'>
                <div className='review-dev'>
                    <img className='' src={img} alt='dfgfd' />
                    <p className='pt-3'><small>{description}</small></p>
                    <h6 className='mb-0'>{name}</h6>
                    <p className='mb-1'><small>{title}</small></p>
                    <img className='review-ratting ' src={font1} alt='' />
                    <img className='review-ratting ps-1' src={font2} alt='' />
                    <img className='review-ratting ps-1' src={font3} alt='' />
                    <img className='review-ratting ps-1' src={font4} alt='' />
                    <img className='review-ratting ps-1' src={font5} alt='' />
                </div>

            </div>
        </div>
    );
};

export default Review;