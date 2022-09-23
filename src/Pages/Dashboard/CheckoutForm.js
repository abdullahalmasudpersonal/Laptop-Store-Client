import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ myorder }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, productPrice, userName,email } = myorder;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ productPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [productPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);

        /// confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email:email,
                    },
                },
            },
        );

        if(intentError){
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else{
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congratulations! Successfylly your payment.');

            /// store payment database 
            const payment ={
                myorder: _id,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/order/${_id}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data =>{
                setProcessing(false);
                console.log(data);
            })
        }

    }

    return (
        <div>
            <h5 className='mb-4 text-primary'>Please enter your card number</h5>
            <form style={{ border: '1px solid gray', padding: '20px', borderRadius: '5px' }} onSubmit={handleSubmit}>
                <div className='p-2' style={{ border: '1px solid rgb(141, 141, 141)', borderRadius: '5px', height: '40px' }}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <button className='mt-3 btn btn-success' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    cardError && <p className='text-danger mt-2 mb-0'>{cardError}</p>
                }
                {
                    success && <div>
                        <p className='text-success mt-2 mb-0'>{success}</p>
                        <p className='text-primary mt-2 mb-0'>Your transaction Id: <span className='fw-bold'>{transactionId}</span></p>
                    </div>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;