import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseProductDetail from '../../Hooks/UseProductDetail';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productsId } = useParams();
    const [products] = UseProductDetail(productsId);
    const navigate = useNavigate();

    const navigateToBuyNow = id => {
        navigate(`/add-to-cart/${id}`);
    }

    return (
        <div className=''>
            <div className='product-detail-bg'>
                <div className='container py-5'>
                    <div class="row">
                        <div class="col-lg-6 ">
                            <img className='img-fluid mr-auto' src={products.img} alt='' />
                        </div>
                        <div class="col-md-6 pb-5">
                            <h3 class="card-title best-selling-title ps-2">{products.name}</h3>
                            <div className='pt-2'>
                                <p style={{ background: 'rgb(211, 235, 255)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Price:</span> <span className='fw-bold'>$ {products.price}</span></p>

                                <p style={{ background: 'rgb(211, 235, 255)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Product Id:</span> <span className='fw-bold'>{products.productCode}</span></p>

                                <p style={{ background: 'rgb(211, 235, 255)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Status:</span> <span className='fw-bold'>{products.status}</span></p>

                                <p style={{ background: 'rgb(211, 235, 255)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Brand:</span> <span className='fw-bold'>{products.brand}</span></p>

                                <p style={{ background: 'rgb(211, 235, 255)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Min. Order:</span> <span className='fw-bold'>{products.minOrder} Ps</span></p>

                                <p style={{ background: 'rgb(211, 235, 255)', display: 'inline-block', borderRadius: '45px' }} className=' px-2 p-1 me-2'><span className='fw-bold' style={{ color: 'rgb(116, 117, 121)' }}>Available:</span> <span className='fw-bold'>{products.quantity} Ps</span></p>
                            </div>
                            <div>
                                <h5 className='pt-2'>Key Features</h5>
                                <p className='mb-1'>Model: {products.model}</p>
                                <p className='mb-1'>Processor: {products.processor}</p>
                                <p className='mb-1'>Ram: {products.ram}</p>
                                <p className='mb-1'>Storage: {products.storage}</p>
                                <p className='mb-1'>Graphics: {products.graphics}</p>
                                <p className='mb-1'>Features: {products.features}</p>
                            </div>
                            <div className='pt-4'>
                                <button onClick={() => navigateToBuyNow(products._id)} className='fw-bold buy-now-btn'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='pt-4 '>
                        <div class="card border-0">
                            <h5 class="card-header border-0">Description</h5>
                            <p class="card-header border-0 card-title pt-0"><small>{products.name}</small></p>
                            <div class="card-body">
                                <p class="card-text">{products.desDetail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;