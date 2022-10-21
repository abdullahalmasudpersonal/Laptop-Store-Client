import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import './SideManu.css';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading />
    }

    return (
        <div class="col">
            <div class="card border-0 profile-dev">
                <div className='pt-4 ps-4'>
                    <h4 className='fw-bold side-header'>All Users ({users?.length})</h4>
                </div>
                <hr />
                <div class="card-body pt-2 pb-4 ps-4 pr-4 ">
                    <div className='table-responsive-xl'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">User Email</th>
                                    <th scope="col">Make Admin</th>
                                    <th scope="col">Admin</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) =><UserRow key={user._id} user={user} index={index}
                                    refetch={refetch} />)
                                }

                             {/*    {orders.map((order, index) =>
                                    <tr key={order._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{order.product}</td>
                                        <td>{order.minOrder} Ps</td>
                                        <td><button onClick={() => handleMyItemDelete(order._id)} className=' order-calcel-btn'>Cancel</button></td>
                                        <td><button className='order-payment-btn'>Pay</button></td>
                                    </tr>)} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;