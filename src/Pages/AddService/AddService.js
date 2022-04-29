import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [service,setService]=useState([]);
    const onSubmit = data => {
        console.log(data);
        const url=`http://localhost:5000/service`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setService(data);
        })

    };
    return (
        <div>
            <p className='text-primary fs-4 fw-bold'>Please Add a new service</p>
            <form className='d-flex flex-column py-3' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='my-3' placeholder='Description' {...register("description")} />
                <input className='my-3' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='my-3' placeholder='Price' type="number" {...register("price")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;