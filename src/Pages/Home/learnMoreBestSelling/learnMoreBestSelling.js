import React from 'react';
import './LearnMoreBestSelling.css';
import larnMoreBestSelling from '../.../../../../Assets/img/larnMoreBestSelling/appleCompany.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const LearnMoreBestSelling = () => {
    return (
        <div className='bestsellinglaptop-bg'>
            <div className='container py-5'>
                <div class="row">
                    <div class="col-md-6 pb-5">
                        <h3 class="card-title best-selling-title">Learn more best laptop company</h3>
                        <p class="card-title"><small className='best-selling-laptop'>Apple</small></p>
                        <p class="card-text">Apple is definitely one of the luxury brands when it comes to Laptops, Smartphones, Computers and Tablets.
                            Apple tops the segments like customer support, build quality, user friendly, design, power and display. Their laptops are extremely attractive with a backlit Apple’s logo on the back making it one of the best things to show off. When it comes to OS, it totally errors free unlike Windows and incredibly easy to use. Simultaneously, If there’s one thing that nearly everyone agrees on, it’s that Apple laptops are very reliable and predictable.
                            <br /><br />
                            Chromebook computers are made to be streamlined and responsive, and the Intel Celeron N4020 processor and eMMC flash storage provide fast system response. Enjoy three-side narrow bezels on the HD display, allowing you to watch your favorite movies and videos with great clarity and fewer distractions.</p>
                        <button class=" read-more-btn"><span className='fw-bold text-gray'>READ MORE</span>
                            <FontAwesomeIcon style={{ fontSize: '12px' }} className='ps-2 pe-0' icon={faGreaterThan} />
                            <FontAwesomeIcon style={{ fontSize: '12px' }} icon={faGreaterThan} />
                        </button>
                    </div>
                    <div class="col-lg-6 ">
                        <img className='img-fluid mr-auto' src={larnMoreBestSelling} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMoreBestSelling;