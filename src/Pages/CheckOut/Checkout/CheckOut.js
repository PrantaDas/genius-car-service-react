import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../Hooks/UseServiceDetail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, loading, error] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Riya ',
    //     email: 'riya@gmail.com',
    //     address: 'Jashore',
    //     phone: '01234567892'
    // });
    // const handleName = (event) => {
    //     console.log(event.target.value);
    //     const { name, ...rest } = user;
    //     const newName = event.target.value;
    //     const newUser = { name: newName, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handleOrder = (event) => {
        event.preventDefault();
        const order = {
            name: event.target.name.value,
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        };
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast.success('Thnaks For your order.We will reach you sonn!!', {
                        theme: 'colored',
                        icon: "🚀"
                    })
                    event.target.reset();
                }

            })

    }
    return (
        <div className='w-50 mx-auto'>
            <p className='text-primary fs-4 fw-bold'>Please Checkout Your Desire Service: {service.name}</p>

            <form onSubmit={handleOrder}>
                <input className='w-100 mb-2' type="text" name="name" id="" placeholder='Name' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="email" name="email" id="" value={user.email} placeholder='Email' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="service" id="" value={service.name} placeholder='Service' autoComplete='off' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='Phone' autoComplete='off' required />
                <br />
                <input className='btn btn-primary mb-2' type="submit" value="Place Order" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;