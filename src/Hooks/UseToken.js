import { useEffect, useState } from "react";

const UseToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken',accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);
    return [token];
}

export default UseToken;
































/* import { useState, useEffect } from "react";
import axios from 'axios';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            const currentUser = {email: email};
            if (email) {
                fetch(`http://localhost:3000/user/${email}`,{
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                })
                const { data } = await axios.post('http://localhost:3000/user', { email });
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken); 
            }
        }
        getToken(); 
    }, [user]);
    return [token];
}

export default useToken; */