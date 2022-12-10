import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:w-10/12  w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;