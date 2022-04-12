import React from 'react';
import './Footer.css';

const Footer = () => {
    let currentYear= new Date().getFullYear(); 
    return (
        <footer className='my-5 text-'>
           <p> <span className='text-secondarr fw-bolder'>&copy;</span> {currentYear} Genius Car Wash.All rights reserved.</p>
        </footer>
    );
};

export default Footer;