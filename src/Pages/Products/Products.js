import React from 'react';
import './Products.css';
import Product from './Product/Product';
import UseProducts from '../../Hooks/UseProducts';

const Products = () => {
    const [products, setProducts] = UseProducts([]);
    
    return (
        <div className='inventories-bg'>
            <div className='container-xxl inventories py-5'>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;