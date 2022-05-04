import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

    const { id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
                console.log(data)
            })
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log('clicked', id);
        const name = event.target.name.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const price = event.target.price.value;
        console.log(name, description, img, price);
        const url = `http://localhost:5000/service/${id}`;
        const service = { name, description, price, img };
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data);
            })
    }
    return (
        <div>
            <p>this is update for {service.name}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" placeholder='name' />
                <input type="text" name="description" id="" placeholder='Description' />
                <input type="text" name="img" id="" placeholder='Photo Url' />
                <input type="number" name="price" id="" placeholder='Price' />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;