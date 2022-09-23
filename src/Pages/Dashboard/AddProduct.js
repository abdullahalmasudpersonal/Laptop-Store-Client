import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const url = `https://fathomless-forest-12893.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Add product')
                e.target.reset();
            })
    };

    return (
        <div class="col">
            <div class="card border-0 profile-dev">
                <div className='pt-4 ps-4'>
                    <h4 className='fw-bold side-header'>Add Product</h4>
                </div>
                <hr />
                <div class="card-body pt-2 pb-4 ps-4 pr-4 ">
                    <div className='addreview-dev'>
                        <h5 className='text-center pt-3 pb-2'>Add Product</h5>
                        <form className='d-flex flex-column px-3 pb-4 review-form'
                            onSubmit={handleSubmit(onSubmit)}>

                            <input className='mb-2' placeholder='Name' type='text' {...register("name", { required: true })} />

                            <input className='mb-2' placeholder='Price' type="text" {...register("price", {required: true})} />

                            <textarea className='mb-2' placeholder='Description' type='text' {...register("description", {required: true})} />

                            <input className='mb-2' placeholder='Available Quantity' type='text' {...register("quantity", { required: true })} />

                            <input className='mb-2' placeholder='Seller' type='text' {...register("seller", { required: true })} />

                            <input className='mb-2' placeholder='Min Order' type='text' {...register("minOrder", { required: true })} />

                            <input className='mb-2' placeholder='Brand' type='text' {...register("brand", { required: true })} />

                            <input className='mb-2' placeholder='Product Code' type='text' {...register("productCode", { required: true })} />

                            <input className='mb-2' placeholder='Stock Status' type='text' {...register("status", { required: true })} />

                            <textarea className='mb-2' placeholder='Description Detail' type='text' {...register("desDetail", { required: true })} />

                            <input className='mb-2' placeholder='Model' type='text' {...register("model", { required: true })} />

                            <input className='mb-2' placeholder='Features' type='text' {...register("features", { required: true })} />

                            <input className='mb-2' placeholder='Graphics' type='text' {...register("graphics", { required: true })} />

                            <input className='mb-2' placeholder='Processor' type='text' {...register("processor", { required: true })} />

                            <input className='mb-2' placeholder='Ram' type='text' {...register("ram", { required: true })} />

                            <input className='mb-2' placeholder='Storage' type='text' {...register("storage", { required: true })} />

                            <input className='mb-2' placeholder='Product Photo URL' type='text' {...register("img", { required: true })} />

                            <input type="submit" value='Add Product' className='add-review-submit fw-bold' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;