import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../API/axios.Private';
import auth from '../../Firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                /* if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                } */
            }
        }
        getOrders();

    }, [user]);

        const handleMyItemDelete = id => {
            const proceed = window.confirm('Are you sure?')
            if (proceed) {
                const url = `http://localhost:5000/order/${id}`;
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
                                        <td><button onClick={() => handleMyItemDelete(order._id)}  className=' order-calcel-btn'>Cancel</button></td>
                                        <td><button className='order-payment-btn'>Pay</button></td>
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