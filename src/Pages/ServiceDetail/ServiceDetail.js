import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <h2>Welcome to detail for :{service.name}</h2>
            <Link to='/checkout'>
                <Button variant='primary'>Proceed Checout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;