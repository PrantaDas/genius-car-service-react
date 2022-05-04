import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ManageService = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        const url=`http://localhost:5000/service`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);

    const handleDelete=(id)=>{
        console.log('clicked',id);
        const url=`http://localhost:5000/service/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const remaining=services.filter(service=>service._id!==id);
            setServices(remaining);
        })
    }
  

   
    return (
        <div>
            <p className='text-primary fw-bold fs-2'>Manage Your Services</p>

            {
                services.map(service=><div key={service._id}>

                    <h4 className='text-info'>{service.name} <button onClick={()=>handleDelete(service._id)}>X</button> <Link to={`/update/${service._id}`}><button >Edit</button></Link></h4>
                </div>)
            }
        </div>
    );
};

export default ManageService;