import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    return (
        <div>
            <h2>Welcome to detail for :{serviceId}</h2>
            <Link to='/checkout'>
                <Button variant='primary'>Proceed Checout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;