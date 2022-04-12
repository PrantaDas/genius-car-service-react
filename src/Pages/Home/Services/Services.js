import React from 'react';
import { useState,useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
   
  const [services,setServices]=useState({});

  useEffect(()=>{
      fetch('services.json')
      .then(res => res.json())
      .then(data =>{
          console.log(data);
          setServices(data);
      })
  },[])

    return (
        <div className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Services</h1>
            <div className='line'>

            </div>
            <div className="services-container">
            {/* {
                services.map(service=><Service key={service.id} service={service}></Service>)
            } */}
            </div>
            </div>
        </div>
    );
};

export default Services;