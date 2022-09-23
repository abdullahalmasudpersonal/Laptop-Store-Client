import React from 'react';
import './Header.css';
import logo from '../../../Assets/img/logo/images__2___1_-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faClipboard, faClipboardList, faComment, faMoon, faSignOut, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import profile from '../../../Assets/img/logo/profile.png';
import { signOut } from 'firebase/auth';
import auth from '../../../Firebase.init';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/');
    }

    return (
        <div className='sticky-top'>
            <nav class="navbar navbar-expand-lg navber-bg px-2">
                <div class="container">
                    <Link to='/'><a class="navbar-brand"> <img src={logo} height='40px' alt='' /></a></Link>
                    <button class="navbar-toggler ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className='d-flex'>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to='/products' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="">Product</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/about' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">About</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/connect-us' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Connect Us</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/reviews' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Reviews</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/blogs' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Blogs</a></Link>
                                </li>
                                {
                                    user &&
                                    <li class="nav-item">
                                        <Link to='/dashboard' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Dashboard</a></Link>
                                    </li>
                                }
                                {
                                    user ?
                                        <li class="dropdown nav-item">
                                            <img src={profile} style={{ borderRadius: '50%', cursor: 'pointer' }} width='30px' className='pt-1' alt='' />
                                            <div className='dropdown-content py-2'>
                                                <div className='profile profile-img'>
                                                    <img src={profile} style={{ borderRadius: '50%', cursor: 'pointer' }} width='60px' className='pt-1 ' alt='' />
                                                </div>
                                                <div className='profile profile-displayname'>
                                                    <h6 className='fw-bold pt-3'>{user.displayName}</h6>
                                                </div>
                                                <div className='profile profile-displayname'>
                                                    <p className='mb-0 px-2'>{user.email}</p>
                                                </div>
                                                <div className='profile  pt-2 pb-2'>
                                                    <Link className='dashboard-btn' to='/dashboard'>
                                                        <h6 className='fw-bold profile-view'>View Profile</h6>
                                                    </Link>
                                                </div>
                                                <hr className='m-0 p-0' />
                                                <li className='dropdown2'>
                                                    <Link to='/register'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <a style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faBookmark} style={{ color: 'gray' }} className='' /> Bookmarks</a>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='dropdown2'>
                                                    <Link to='/register'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <a style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faClipboardList} style={{ color: 'gray' }} className='' /> My Order</a>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='dropdown2'>
                                                    <Link to='/register'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <a style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faComment} style={{ color: 'gray' }} className='' /> Add Review</a>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='dropdown2'>
                                                    <Link to='/register'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <a style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faMoon} style={{ color: 'gray' }} className='' /> Darkmode</a>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='dropdown2'>
                                                    <Link to='/register'>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <a style={{ color: 'gray', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faUserPlus} style={{ color: 'gray' }} className='' /> Register</a>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li class="dropdown2">
                                                    <a onClick={handleSignOut} class="nav-link active fw-bold " aria-current="page" href="#"> <FontAwesomeIcon icon={faSignOut} style={{ color: 'gray' }} className='pl-1' /> <span className='pl-1' style={{ color: 'gray' }}>Logout</span></a>
                                                </li>
                                            </div>
                                        </li>
                                        :
                                        <li class="nav-item">
                                            <Link to='/login' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Login</a></Link>
                                        </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;