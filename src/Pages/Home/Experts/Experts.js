import React from 'react';
import expert1 from "../../../images/experts/expert-1.jpg"
import expert2 from "../../../images/experts/expert-2.jpg"
import expert3 from "../../../images/experts/expert-3.jpg"
import expert4 from "../../../images/experts/expert-4.jpg"
import expert5 from "../../../images/experts/expert-5.jpg"
import expert6 from "../../../images/experts/expert-6.png"
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: "Will Smith", img: expert1 },
        { id: 2, name: "James Bond", img: expert2 },
        { id: 3, name: "William SP", img: expert3 },
        { id: 4, name: "De Cap", img: expert4 },
        { id: 5, name: "Ed Sheren", img: expert5 },
        { id: 6, name: "John Ecstacy", img: expert6 }
    ];
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className='row gx-5 mx-auto'>
            {
                  experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)  
                } 
            </div>
        </div>
    );
};

export default Experts;