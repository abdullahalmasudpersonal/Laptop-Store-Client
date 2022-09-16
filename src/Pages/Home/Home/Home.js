import React, { useEffect, useState } from 'react';
import Review from '../../Reviews/Review';
import CarouselFadeExample from '../Banner/Banner';
import BestSellingLaptop from '../BestSellingLaptop/BestSellingLaptop';
import LaptopStoreCount from '../LaptopStoreCount/LaptopStoreCount';

const Home = () => {
    const [review, setReview] = useState([]);

    useEffect( () =>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);

    return (
        <div>
            <CarouselFadeExample />
            <LaptopStoreCount />
            {/* home review start */}
            <div className='reviews pb-5'>
                <div className='container'>
                    <h3 className='text-center pt-5 pb-5'>Reviews</h3>
                    <div className='reviews-map'>
                        {
                            review.slice(0,4).map(review => <Review key={review._id} review={review}></Review>)
                        }
                    </div>
                </div>
            </div>
            {/* home review start */}
            <BestSellingLaptop/>
        </div>
    );
};

export default Home;