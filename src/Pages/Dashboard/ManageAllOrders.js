import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://agile-sierra-69764.herokuapp.com/order`, {
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

    const handleCoustomerOrderDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://agile-sierra-69764.herokuapp.com/order/${id}`;
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
                                    <th scope="col">User Name</th>
                                    <th scope="col">User Email</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quentity</th>
                                    <th scope="col">Cancel</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) =>
                                    <tr key={order._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.product}</td>
                                        <td>{order.minOrder} Ps</td>
                                        <td><button onClick={() => handleCoustomerOrderDelete(order._id)} className=' order-calcel-btn'>Cancel</button></td>
                                        <td><button className='order-payment-btn'>Shift</button></td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;