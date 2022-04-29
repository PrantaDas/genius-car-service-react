import React from 'react';
import { useState,useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
   
  const [services,setServices]=useState([]);

  useEffect(()=>{
      const url=`http://localhost:5000/service`;
      fetch(url)
      .then(res => res.json())
      .then(data =>{
          console.log(data);
          setServices(data);
      })
  },[])

    return (
        <div id='services' className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Services</h1>
            <div className='line'>

            </div>
            <div className="services-container">
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;