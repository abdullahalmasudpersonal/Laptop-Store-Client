import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const { _id, name, img, description, price, quantity, seller } = product;
    const navigate = useNavigate();

    const navigateToUpdateInventory = _id =>{
        navigate(`/prodcut/${_id}`); 
    }

    return (
        <div className='inventory '>
            <img className='w-100' height='180px' src={img} alt='' />
            <div className='px-3'>
                <h5 className='brandname'>{name}</h5>
                <h6>Price: ${price}</h6>
                <p className='mb-1'>Quantity: {quantity}</p>
                <strong>
                    <p className='mb-1'>Seller: {seller}</p>
                </strong>
                <small>
                    <p className='mb-0'>{description}</p>
                </small>
            </div>
            <button onClick={() => navigateToUpdateInventory(_id)} className='cartbtn-btn fw-bold'>Update</button>
        </div>
    );
};

export default Product;