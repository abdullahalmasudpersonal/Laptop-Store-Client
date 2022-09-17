import React, { useEffect, useState } from 'react';
import UseProducts from '../../../Hooks/UseProducts';
import Product from '../../Products/Product/Product';
import Review from '../../Reviews/Review';
import CarouselFadeExample from '../Banner/Banner';
import BestSellingLaptop from '../BestSellingLaptop/BestSellingLaptop';
import LaptopStoreCount from '../LaptopStoreCount/LaptopStoreCount';
import LearnMoreBestSelling from '../LearnMoreBestSelling/LearnMoreBestSelling';

const Home = () => {
    const [review, setReview] = useState([]);
    const [products, setProducts] = UseProducts([]);

    useEffect( () =>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);

    return (
        <div>
            <CarouselFadeExample />
            {/* home product start */}
            <div className='inventories-bg'>
                <h2 className='text-center pt-5 pb-3 fw-bold' style={{color:'rgb(12, 146, 255)'}}>Products</h2>
            <div className='container-xxl inventories py-5'>
                {
                    products.slice(0,8).map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </div>
            {/* home product end */}
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
            <LearnMoreBestSelling/>
            <BestSellingLaptop/>
        </div>
    );
};

export default Home;