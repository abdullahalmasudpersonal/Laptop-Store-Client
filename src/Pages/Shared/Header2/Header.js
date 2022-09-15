import React from 'react';
import './Header.css';
import logo from '../../../Assets/img/logo/images__2___1_-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
/* import { useAuthState } from 'react-firebase-hooks/auth'; */
/* import auth from '../../../firebase.init'; */
import profile from '../../../Assets/img/logo/profile.png';
/* import { signOut } from 'firebase/auth'; */

const Header2 = () => {
    /*  const [user] = useAuthState(auth);
     console.log(user)
     const handleSignOut = () => {
         signOut(auth);
     } */

    return (
        <nav class="navbar sticky-top navbar-expand-lg navber-bg px-2">
            <div class="container">
                <Link to='/'><a class="navbar-brand"> <img src={logo} height='40px' alt='' /></a></Link>
                <button class="navbar-toggler ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/products' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="">Products</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">About</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/reviews' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="">Reviews</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/blogs' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Blogs</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/connect-us' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Connect Us</a></Link>
                        </li>
                    </ul>

                    <div className='d-flex'>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                /*   user && */
                                <>
                                    <li class="nav-item">
                                        <Link to='/add-product' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Add Item</a></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='/manage-products' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Manage Item</a></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='/my-item' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">My Item</a></Link>
                                    </li>
                                </>
                            }
                            {
                                /*  user ?
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
                                             <div className='profile pt-2 pb-2'>
                                                 <h6 className='fw-bold profile-view'>View Profile</h6>
                                             </div>
                                             <li className='dropdown2'>
                                                 <Link to='/my-item'>
                                                     <div className='d-flex justify-content-between align-items-center'>
                                                         <a style={{ color: 'gray' }}>My Order</a>
                                                     </div>
                                                 </Link>
                                             </li>
                                             <li className='dropdown2'>
                                                 <Link to='/add-item'>
                                                     <div className='d-flex justify-content-between align-items-center'>
                                                         <a style={{ color: 'gray' }}>Add Product</a>
                                                     </div>
                                                 </Link>
                                             </li>
                                             <li className='dropdown2'>
                                                 <Link to='/manage-item'>
                                                     <div className='d-flex justify-content-between align-items-center'>
                                                         <a style={{ color: 'gray' }}>Manage Product</a>
                                                     </div>
                                                 </Link>
                                             </li>
                                             <li className='dropdown2'>
                                                 <Link to='/register'>
                                                     <div className='d-flex justify-content-between align-items-center'>
                                                         <a style={{ color: 'gray' }}> <FontAwesomeIcon icon={faSignOut} style={{ color: 'gray' }} className='' /> Register</a>
                                                     </div>
                                                 </Link>
                                             </li>
                                             <li class="dropdown2">
                                                 <a onClick={handleSignOut} class="nav-link active fw-bold " aria-current="page" href="#"> <FontAwesomeIcon icon={faSignOut} style={{ color: 'gray' }} className='pl-1' /> <span className='pl-1' style={{ color: 'gray' }}>Logout</span></a>
                                             </li>
                                         </div>
                                     </li>
                                     : */
                                <li class="nav-item">
                                    <Link to='/login' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" href="#">Login</a></Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header2;