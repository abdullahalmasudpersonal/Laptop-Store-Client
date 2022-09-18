import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import profile from '../../Assets/img/logo/profile.png';

const Dashboard = () => {
    return (
        <div className='container-lg py-5'>
            <div className='dashboard'>
                <div className='pr-2'>
                    <div className='dashboard-dev2'>
                        <div className='dashboard-pro-img'>
                            <img width='60px' src={profile} alt='' />
                        </div>
                        <ul className='pt-4 px-4'>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Profile</li>
                            </Link>
                            <Link to='/dashboard/add-review' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Add Review</li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;