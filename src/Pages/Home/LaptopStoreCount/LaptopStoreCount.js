import React from 'react';
import './LaptopStoreCount.css';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCommentDots, faComments, faFlag, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

const LaptopStoreCount = () => {
    return (
        <div  className='laptopstore-bg'>
            <div className='count-heading'>
                <h2 className='fw-bold'>LAPTOP STORE OF NUMBERS</h2>
            </div>
            <div className='muusm-count-bg' id='counter'>
                <div className='container muusmcount'>
                    <div className='muus-count-dev'>
                        <div>
                            {/* <i style={{ color: 'rgb(255, 196, 0)' }} class="fa-solid fa-building-columns founded"></i> */}
                            <FontAwesomeIcon className='founded' icon={faFlag} />
                            <h1 className='fw-bold text-center mt-2 mb-0 counter-number'><CountUp end={100}/>+</h1>
                            <h4 className='fw-bold text-center counter-number'>Countries</h4>
                        </div>
                    </div>
                    <div className='muus-count-dev'>
                        <div>
                            {/* <i style={{ color: 'rgb(255, 196, 0)' }} class="fa-solid fa-user-shield teachers "></i> */}
                            <FontAwesomeIcon className='teachers' icon={faLaptopHouse} />
                            <h1 className='fw-bold text-center mt-2 mb-0 counter-number'>0<CountUp end={7} /><span>+</span></h1>
                            <h4 className='fw-bold text-center counter-number'>Company</h4>
                        </div>
                    </div>
                    <div className='muus-count-dev'>
                        <div>
                            {/* <i style={{ color: 'rgb(255, 196, 0)' }} class="fa-solid fa-users students"></i> */}
                            <FontAwesomeIcon className='students' icon={faCommentDots} />
                            <h1 className='fw-bold text-center mt-2 mb-0 counter-number'><CountUp end={12} />K<span>+</span></h1>
                            <h4 className='fw-bold text-center counter-number'>Feadback</h4>
                        </div>
                    </div>
                    <div className='muus-count-dev'>
                        <div>
                           {/*  <i style={{ color: 'rgb(255, 196, 0)' }} class="fas fa-medal re-award"></i> */}
                            <FontAwesomeIcon className='re-award' icon={faComments} />
                            <h1 className='fw-bold text-center mt-2 mb-0 counter-number'><CountUp end={17} />K<span>+</span></h1>
                            <h4 className='fw-bold text-center counter-number'>Reviews</h4>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </div>
        </div>
    );
};

export default LaptopStoreCount;