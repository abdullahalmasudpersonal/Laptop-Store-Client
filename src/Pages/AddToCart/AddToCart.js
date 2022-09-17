import React from 'react';
import './AddToCart.css';

const AddToCart = () => {
    /*   const { productsId } = useParams();
      const [products] = UseProductDetail(productsId); */

    return (
        <div className='addtocart-bg'>
            <div className='container py-5'>
                <div className='addtocart'>
                    <h4 className='text-center pt-4 fw-bold'>Add To Cart</h4>
                    <div className='pt-3 pb-4 addtocart-form'>
                    <form /* onSubmit={handlePlaceOrder} */ >
                        <input type="text" name='uName' class="input mb-3" /* value={user?.displayName} */ readOnly disabled />
                        <br />
                        <input type="email" name='email' class="input mb-3" /* value={user?.email} */ readOnly disabled />
                        <br />
                        <input type="text" name='name' class="input mb-3" /* value={product.name} */ readOnly disabled />
                        <br />
                        <input type="text" name='minOrder' class="input mb-3" /* defaultValue={product.minOrder} */ />
                        <br />
                        <input type="text" name='address' placeholder="Address" class="input mb-3" required />
                        <br />
                        <textarea type="text" name='address' placeholder="Address" class="input mb-3" required  />
                        <br/>
                        <input type="text" name='phone' placeholder="Phone" class="input mb-3" required />
                        <br />
                        <input type="submit" value='Add To Cart' class="fw-bold " />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;