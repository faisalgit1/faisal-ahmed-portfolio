import React from 'react';
import logo from '../../../assets/images/faisal.jpg'

const Footer = () => {
    return (
        <div className='py-14'>

            <div className='flex justify-center items-center'>
                <img src={logo} className='w-16 h-16 rounded-full ring-purple-200 ring-4' alt="" />

            </div>
            <h1 className='monoster-fonts my-3 text-gray-700 text-xl font-semibold text-center uppercase'> Portfolio</h1>
            <small className='flex justify-center items-center text-gray-700'>© 2022. All rights reserved by Faisal Ahmed</small>

        </div>
    );
};

export default Footer;