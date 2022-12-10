import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
        <div className='container  mx-auto'>
            <h2 className='text-5xl font-bold mt-10'>MD. <span className='text-cyan-500'>FAISAL AHMED</span></h2>
            <p className='mt-2 text-2xl'>FrontEnd Web Developer</p>
            <p className='mt-6'>
                I am a <strong>Passionate Web Developer, fast learner, and team player</strong><br /> also have strong desire to develop professionally and constantly enhance my skills.
            </p>
            <div className='flex justify-center items-start mt-5 gap-3'>
                <a href='https://www.facebook.com/foisalahmed.bijoy/' target="_blank"><FaFacebook className='text-2xl text-black hover:text-blue-700' /></a>
                <a href='https://github.com/faisalgit1' target="_blank"><FaGithub className='text-2xl text-black hover:text-blue-700' /></a>
                <a href='https://www.linkedin.com/in/mdfaisalahmedbijoy/' target="_blank"><FaLinkedin className='text-2xl text-black hover:text-blue-700' /></a>
            </div>

        </div>
    );
};

export default Header;