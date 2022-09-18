import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import profile from '../../Assets/img/logo/profile.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='container-lg py-5'>
            <div className='dashboard'>
                <div className='pr-2'>
                    <div className='dashboard-dev2'>
                        <div className='dashboard-pro-img'>
                            <img width='60px' src={profile} alt='' />
                        </div>
                        <h6 className='text-center fw-bold'>{user?.displayName}</h6>
                        <ul className='pt-3 px-4'>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Profile</li>
                            </Link>
                            <Link to='/dashboard/add-review' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Add Review</li>
                            </Link>
                            <Link to='/dashboard/my-order' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>My Order
                                </li>
                            </Link>
                            <Link to='/dashboard/add-product' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Add Product
                                </li>
                            </Link>
                            <Link to='/dashboard/manage-product' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Manage Product
                                </li>
                            </Link>
                            <Link to='/dashboard' className='text-decoration-none'>
                                <li className='dashboard-list-item ps-3 mb-2'>Manage All Orders
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