import React from 'react';
import { useForm } from 'react-hook-form';
import './SideManu.css';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const url = `https://agile-sierra-69764.herokuapp.com/review`;
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
                toast.success('Add Review')
                e.target.reset();
            })
    };

    return (
        <div class="col">
            <div class="card border-0 profile-dev">
                <div className='pt-4 ps-4'>
                    <h4 className='fw-bold side-header'>Add Review</h4>
                </div>
                <hr />
                <div class="card-body pt-2 pb-4 ps-4 pr-4 ">
                    <div className='addreview-dev'>
                        <h5 className='text-center pt-3 pb-2'>Add Review</h5>
                        <form className='d-flex flex-column px-3 pb-4 review-form'
                            onSubmit={handleSubmit(onSubmit)}>

                            <input className='mb-2' placeholder='Name' type='text' {...register("name", { required: true })} />

                            <input className='mb-2' placeholder='Title' type="text" {...register("title")} />

                            <textarea className='mb-2' placeholder='Comment' {...register("description")} />

                            <p className='mb-0'><small>Review Like Star Url:- <span style={{color:'blue'}}>https://i.ibb.co/th5NGDz/star.png</span></small></p>

                            <p><small>Review Dislike Star Url:- <span style={{color:'blue'}}>https://i.ibb.co/6Rr1Z7g/nagativ-star.png</span></small></p> 

                            <input className='mb-2' placeholder='1 Star URL' type='text' {...register("font1", { required: true })} />
                            <input className='mb-2' placeholder='2 Star URL' type='text' {...register("font2", { required: true })} />
                            <input className='mb-2' placeholder='3 Star URL' type='text' {...register("font3", { required: true })} />
                            <input className='mb-2' placeholder='4 Star URL' type='text' {...register("font4", { required: true })} />
                            <input className='mb-2' placeholder='5 Star URL' type='text' {...register("font5", { required: true })} />
                            <input className='mb-2' placeholder='Your Photo URL' type='text' {...register("img", { required: true })} />

                            <input type="submit" value='Add Review' className='add-review-submit fw-bold' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;