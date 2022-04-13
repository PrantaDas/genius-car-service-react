import React from 'react';
import logo from "../../../images/NotFound/404.jpg"

const NotFound = () => {
    return (
        <div className='container-fluid'>
            <h2>Opps!! Results not fond..</h2>
            <div>
            <img  className='w-100' src={logo} alt="" />
            </div>
        </div>
    );
};

export default NotFound;