import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/img/logo/images__2___1_-removebg-preview.png';
import './Header.css';

const Header = () => {
    return (
        <div className='navber-bg fixed-top'>
            <div className=''>
                {/*  <nav class="navbar navbar-expand-lg container navber-bg">
                    <Link to='/'><img class="navbar-brand" src={logo} height='40px
                    ' alt='' /></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    </div>
                </nav> */}
                <nav class="navbar navbar-expand-lg container">
                    <Link to='/'><img class="navbar-brand" src={logo} height='40px
                    ' alt='' /></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to='/' className='text-decoration-none fw-bold'><a class="nav-link" href="#">Products</a></Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/' className='text-decoration-none fw-bold'><a class="nav-link" href="#">Dashboard</a></Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/' className='text-decoration-none fw-bold'><a class="nav-link" href="#">Reviews</a></Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/' className='text-decoration-none fw-bold'><a class="nav-link" href="#">Blogs</a></Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/' className='text-decoration-none fw-bold'><a class="nav-link" href="#">Connect Us</a></Link>
                            </li>
                            <li class="nav-item active">
                                <Link to='/' className='text-decoration-none fw-bold'><a class="nav-link" href="#">About</a></Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        {/* <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                        <div className='d-flex justify-content-end'>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item active ">
                                    <Link to='/' className='text-decoration-none fw-bold'><a class="nav-link " href="#">Sign In</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Header;