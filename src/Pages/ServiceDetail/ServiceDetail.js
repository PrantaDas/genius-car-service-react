import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/UseServiceDetail';

const ServiceDetail = () => {
    const {serviceId}=useParams();
   const [service]=useServiceDetail(serviceId);
    return (
        <div>
            <h2>Welcome to detail for :{service.name}</h2>
            <Link to={`/checkout/${serviceId}`}>
                <Button variant='primary'>Proceed Checout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;