import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://laptop-stores01.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Field to create an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully create an admin');
                }
            })
    }

/*     const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://laptop-stores01.herokuapp.com/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = user.filter(user => user._id !== id);
                    setOrders(remaining);
                })
        }
    } */

    return (
        <tr >
            <th>{index + 1}</th>

            <td>{email}</td>

            <td> {role !== 'admin' && <button onClick={makeAdmin} className='order-payment-btn'>Create Admin</button>}</td>

            <td>{role === 'admin' && <p className='text-success fw-bold'>Admin</p>}</td>
            <td><button /* onClick={() => handleUserDelete(order._id)} */ className=' order-calcel-btn'>Delete</button></td>
        </tr >
    );
};

export default UserRow;