import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    const navigate=useNavigate();
    const handleServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='single-service mt-5'>
            <div>
                <img className='w-100' src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <Button onClick={() => { handleServiceDetail(id) }} variant="primary">Book</Button>
        </div>
    );
};

export default Service;
