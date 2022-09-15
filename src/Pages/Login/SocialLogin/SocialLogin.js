import React from 'react';
import Google from '../../../Assets/img/SocialLogin/google-logo3.png';
import './SocialLogin.css';
/* import useToken from '../../../Hooks/UseToken'; */
/* import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init'; */


const SocialLogin = () => {
    /* const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth); */
    /* const [token] = useToken(user); */
  /*   const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    let errorElement; */

 /*    if(loading){
        return <Loading/>
    }

    if (error ) {
        errorElement =
            <p className='text-danger'>{error?.message} {error?.message}</p>
    } */

    /* if (token) {
        navigate(from, { replace: true });
    } */

    return (
        <div>
          {/*   {errorElement} */}
            <button /* onClick={() => signInWithGoogle()} */
                style={{ width: '240px', border: 'none' }} className=' fw-bold mx-auto d-block my-3 continue-with-google'>
                <img  style={{ width: '28px' }} src={Google} alt='' />
                <span className='px-1'>Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;