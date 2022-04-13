import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='single-service mt-5'>
            <div>
                <img className='w-100' src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <Button variant="primary">Book</Button>
        </div>
    );
};

export default Service;
