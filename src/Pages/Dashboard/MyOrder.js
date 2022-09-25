import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://laptop-server-new.herokuapp.com/myorder?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accesToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user])

    const handleMyOrderDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://laptop-server-new.herokuapp.com/myorder/${id}`;
            console.log('masud',url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }


    return (
        <div class="col">
            <div class="card border-0 profile-dev">
                <div className='pt-4 ps-4'>
                    <h4 className='fw-bold side-header'>My Order ({orders.length})</h4>
                </div>
                <hr />
                <div class="card-body pt-2 pb-4 ps-4 pr-4 ">
                    <div className='table-responsive-xl'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quentity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Cancel</th>
                                    <th scope="col">Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) =>
                                    <tr key={order._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{order.product}</td>
                                        <td>{order.minOrder} Ps</td>
                                        <td>{order.productPrice} $</td>
                                        <td><button onClick={() => handleMyOrderDelete(order._id)} className=' order-calcel-btn'>Cancel</button></td>
                                        {/* <td>{(order.productPrice && !order.paid) && <Link  /> <button className='order-payment-btn'>Pay</button>}</td> */}

                                        <td>
                                            {(order.productPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='order-payment-btn'>Pay</button></Link>}
                                            {(order.productPrice && order.paid) && <p className='text-success'>Paid</p>}
                                            </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;