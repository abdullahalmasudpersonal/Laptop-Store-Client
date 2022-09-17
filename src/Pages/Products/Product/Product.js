import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const { _id, name, img, description, price, quantity, minOrder, brand } = product;
    const navigate = useNavigate();

    const navigateToUpdateInventory = _id =>{
        navigate(`/products/${_id}`); 
    }

    return (
        <div className='inventory '>
            <img className='w-100' height='180px' src={img} alt='' />
            <div className='px-3'>
                <h5 className='brandname'>{name}</h5>
                <h6>Brand: {brand}</h6>
                <h6>Price: ${price}</h6>
                <p className='mb-1'>Min.Order: {minOrder} Ps</p>
                <p className='mb-1'>Available: {quantity} Ps</p>
                <small>
                    <p className='mb-0'>{description}</p>
                </small>
            </div>
            <button onClick={() => navigateToUpdateInventory(_id)} className='cartbtn-btn fw-bold'>Update</button>
        </div>
    );
};

export default Product;