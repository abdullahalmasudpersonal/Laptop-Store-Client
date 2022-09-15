import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
/* import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'; */
/* import auth from '../../../Firebase.init'; */

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   /*  const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth); */


    return (
        <div className='container'>
            <h>Login</h>
            <form /* onSubmit={handleSubmit(onSubmit)}  */className='login-form'>
                <div>
                    <input className='login-input' type='email'
                        placeholder=' Email' autoComplete="off"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className='label ml-12'>
                        {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                    </label>
                </div>

                <div>
                    <input className='login-input ' type='password'
                        placeholder=' Password' autocomplete="off"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <label className='label ml-12'>
                        {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                    </label>
                </div>
                {/* {signInError} */}
                <input type='submit' className='login-input input-submit' value='Login' />
            </form>
        </div>
    );
};

export default Login;