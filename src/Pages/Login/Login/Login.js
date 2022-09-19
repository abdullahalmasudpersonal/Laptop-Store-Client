import React, { useRef } from 'react';
import './Login.css';
import logo from '../../../Assets/img/logo/images__2___1_-removebg-preview.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../Hooks/UseToken';
import { toast } from 'react-toastify';

const Login = () => {
    const emailRef = useRef('');
    const passwrodRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    if (loading || sending) {
        return <Loading />
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement =
            <p className='text-danger'>{error?.message} </p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwrodRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('send email');
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (
        <div className='login-bg'>
            <div className='container'>
                <div className='login'>
                    <div className='login-dev'>
                        <div className='d-flex justify-content-center pt-4'>
                            <img width='100px' src={logo} alt='' />
                        </div>
                        <h4 className='text-center pt-3 login-color'>Login</h4>
                      <div className='login-form-dev'>
                      <form onSubmit={handleSubmit}>
                            <input type='email' ref={emailRef} placeholder='Email' name='' required /> <br />
                            <input type='password' ref={passwrodRef} placeholder='Password' name='' required /> <br />
                            <p className='mb-0 login-forget-btn '><span onClick={resetPassword} >Froget password</span></p>
                            <input className='fw-bold submit' type='submit' name='' value='login' />
                        </form>
                      </div>
                        <p className='text-center'>{errorElement}</p>
                        <div>
                            <SocialLogin />
                        </div>
                        <p className='text-center new-to-site ' style={{ color: 'gray' }}>New to WebSite? <Link to='/register' className='please-register-text-color pe-auto text-decoration-none'>Please Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;