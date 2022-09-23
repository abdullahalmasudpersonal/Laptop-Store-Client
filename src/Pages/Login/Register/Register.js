import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/img/logo/images__2___1_-removebg-preview.png';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

import { useForm } from "react-hook-form";
import UseToken from '../../../Hooks/UseToken';

const Register = () => {
/*     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = UseToken(user || gUser);


    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading />
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

     if (token) {
        navigate('/');
    } 

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
    } */

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [token] = UseToken(user);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    if (loading || updating) {
        return <Loading />
    }

    if (token) {
        navigate(from, { replace: true });
    }


    return (
        <div className='register-bg'>
        <div className='container'>
            <div className='register'>
                <div className='register-dev'>
                    <div className='d-flex justify-content-center pt-4'>
                        <img width='100px' src={logo} alt='' />
                    </div>
                    <h4 className='text-center pt-3 login-color'>Register</h4>

                    <form onSubmit={handleRegister} className='register-form'>
                        <div className='register-input-field'>
                            <input className='register-input border-0' type='text' placeholder='Name' name='name' required /> <br />
                            <input className='register-input border-0' type='email' placeholder='Email' name='email' required /> <br />
                            <input className='register-input border-0' type='password' placeholder='Password' name='password' required /> <br />
                            <input className='register-input border-0 pt-0 fw-bold register-submit-btn' type='submit' name='' value='Register' />
                        </div>
                    </form>
                    <div>
                        <SocialLogin />
                    </div>
                    <p className='text-center new-to-site' style={{ color: 'gray' }}>Alrady have an account? <Link to='/login' className='please-register-text-color pe-auto text-decoration-none'>Please Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;



/*     const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('updated profile');
    }

    if (loading || updating) {
        return <Loading />
    }

    if (user) {
        console.log(user)
        navigate(from, { replace: true });
    }
    if (token) {
        navigate('/');
    } */


/*
<div className='register-bg'>
        <div className='container'>
            <div className='register'>
                <div className='register-dev'>
                    <div className='d-flex justify-content-center pt-4'>
                        <img width='100px' src={logo} alt='' />
                    </div>
                    <h4 className='text-center pt-3 login-color'>Register</h4>

                    <form onSubmit={handleRegister} className='register-form'>
                        <div className='register-input-field'>
                            <input className='register-input border-0' type='text' placeholder='Name' name='name' required /> <br />
                            <input className='register-input border-0' type='email' placeholder='Email' name='email' required /> <br />
                            <input className='register-input border-0' type='password' placeholder='Password' name='password' required /> <br />
                            <input className='register-input border-0 pt-0 fw-bold register-submit-btn' type='submit' name='' value='Register' />
                        </div>
                    </form>
                    <div>
                        <SocialLogin />
                    </div>
                    <p className='text-center new-to-site' style={{ color: 'gray' }}>Alrady have an account? <Link to='/login' className='please-register-text-color pe-auto text-decoration-none'>Please Login</Link></p>
                </div>
            </div>
        </div>
    </div>
*/