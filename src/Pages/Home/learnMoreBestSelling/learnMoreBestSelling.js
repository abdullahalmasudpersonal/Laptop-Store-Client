import React from 'react';
import './BestSellingLaptop.css';
import bestSellingLaptop from '../.../../../../Assets/img/bestSellingLaptop/best-selling-laptop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const BestSellingLaptop = () => {
    return (
        <div className='bestsellinglaptop-bg'>
            <div className='container py-5'>
                <div class="row">
                    <div class="col-lg-6 ">
                        <img className='img-fluid mr-auto' src={bestSellingLaptop} alt='' />
                    </div>
                    <div class="col-md-6">
                        <h3 class="card-title">Best Selling Laptop</h3>
                        <p class="card-title"><small>Lenovo IdeaPad 3 11 Chromebook</small></p>
                        <p class="card-text">Enjoy more simplicity and productivity with the fast, fun, and flexible Lenovo Chromebook 3 11-inch laptop. This convenient and portable Chromebook laptop couldn't be easier to use – just log in with your Google account and you're ready to go! No setup needed to get right to work or play. Plus, with access to the rich library of apps on Google Play, you'll have the latest programs at your fingertips.
                            Chromebook computers are made to be streamlined and responsive, and the Intel Celeron N4020 processor and eMMC flash storage provide fast system response. Enjoy three-side narrow bezels on the HD display, allowing you to watch your favorite movies and videos with great clarity and fewer distractions.</p>
                        <button class=" read-more-btn"><span className='fw-bold text-gray'>READ MORE</span>
                            <FontAwesomeIcon style={{ fontSize: '12px' }} className='ps-2 pe-0' icon={faGreaterThan} />
                            <FontAwesomeIcon style={{ fontSize: '12px' }} icon={faGreaterThan} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellingLaptop;