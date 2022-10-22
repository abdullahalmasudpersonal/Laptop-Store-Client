import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1TQBAiM96NUDH8x6SIFy0s3xqVdItXjnM0vZyeeU134Z5gND9QEOsKvmYeGthMg9WU7AWnncri53WkQqamYDdg00R4x07DLG');

const Payment = () => {
    const { id } = useParams();
    const url = `https://agile-sierra-69764.herokuapp.com/myorder/${id}`;

    const { data: myorder, isLoading } = useQuery(['myorder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div class="col">
            <div class="card border-0 profile-dev">
                <div className='pt-4 ps-4'>
                    <h4 className='fw-bold side-header'>Hellow <span className='text-primary'>{myorder.name} </span>Please pay for you</h4>
                </div>
                <hr />
                <div class="card-body pt-2 pb-4 ps-4 pr-4 ">
                    <div className='table-responsive-xl'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quentity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>{myorder.product}</td>
                                <td>{myorder.minOrder}</td>
                                <td>{myorder.productPrice} $</td>
                                <td>{myorder.productPrice} $</td>
                            </tbody>
                        </table>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm myorder={myorder} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;