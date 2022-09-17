import React from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseProductDetail from '../../Hooks/UseProductDetail';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AddToCart.css';

const AddToCart = () => {
      const { productsId } = useParams();
      const [products] = UseProductDetail(productsId);
      const [user] = useAuthState(auth);

      const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            name: user.name,
            email: user.email,
            product: products.name,
            productId: productsId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://af-electronic-ltd.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success('Your order is placed !!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='addtocart-bg'>
            <div className='container py-5'>
                <div className='addtocart'>
                    <h4 className='text-center pt-4 fw-bold'>Add To Cart</h4>
                    <div className='pt-3 pb-4 addtocart-form'>
                    <form onSubmit={handlePlaceOrder} >
                        <input type="text" name='uName' class="input mb-3" value={user?.displayName} readOnly disabled />
                        <br />
                        <input type="email" name='email' class="input mb-3" value={user?.email} readOnly disabled />
                        <br />
                        <input type="text" name='name' class="input mb-3" value={products.name} readOnly disabled />
                        <br />
                        <input type="text" name='minOrder' class="input mb-3 " defaultValue={products.minOrder} required />
                        <br />
                        {/* <input type="text" name='address' placeholder="Address" class="input mb-3" required />
                        <br /> */}
                        <textarea type="text" name='address' placeholder="Address" class="input mb-3" required  />
                        <br/>
                        <input type="text" name='phone' placeholder="Phone" class="input mb-3" required />
                        <br />
                        <input type="submit" value='Add To Cart' class="fw-bold add-to-cart-button" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;