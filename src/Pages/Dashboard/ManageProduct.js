import React from 'react';
import UseProducts from '../../Hooks/UseProducts';

const ManageProduct = () => {
    const [products, setProducts] = UseProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://laptop-server-new.herokuapp.com/products/${id}`;
            console.log('url', url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })
        }
    }

    return (
        <div className='col'>
            <div className='card border-0 manage-product'>
                <div className='pt-4 ps-4'>
                    <h4 className='fw-bold side-header'>Manage Product</h4>
                </div>
                <hr />
                <div class="card-body pt-2 pb-4 ps-4 pr-4 ">
                    <div className='table-responsive-xl'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) =>
                                    <tr key={product._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{product.name}</td>
                                        <td>{product.model}</td>
                                        <td><img width='60px' height='50px' src={product.img} alt='' /> </td>
                                        <td><button onClick={() => handleDelete(product._id)} className=' order-calcel-btn'>Delete</button></td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>


                    {/*  <div>
                        <h4 className='mb-3'>Manage Product</h4>
                        {
                            products.map(porduct =>
                                <div key={porduct._id}>
                                    <ul>
                                        <li>
                                            <h5>{porduct.name} <button
                                                className='bg-delete'
                                                onClick={() => handleDelete(porduct._id)}>Delete</button>
                                            </h5>
                                        </li>
                                    </ul>
                                </div>)
                        }
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;