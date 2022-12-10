import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (event) => {

        event.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_oe7lejb', 'template_sokrhhv', form.current, 'jUr7aJ3ceRf70O7sN')
            .then((result) => {
                console.log(result.text);
                toast.success('Your Message Send Successfully')
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
    };

    return (
        <div id='contact'>
            <div className='my-10 '>
                <h1 className=' md:text-4xl font-semibold text-gray-600 text-2xl '>Contact With Me</h1>
            </div>
            <div className=' bg-contact rounded-lg'>
                <div className='h-full w-full bg-simple py-3 rounded-lg'>
                    <form ref={form} onSubmit={sendEmail} className='md:w-2/4 w-11/12 mx-auto mt-3 block p-5 rounded '>
                        <h1 className='text-3xl mt-10 font-bold  text-white  text-center '>Contact</h1>
                        <h1 className='font-semibold text-white  text-center '>Stay connected with Me</h1>
                        <input type="text" name='name' placeholder='Enter Your Name' className='w-full text-white  placeholder:text-white placeholder:font-semibold mt-5 p-2 bg-simple shadow focus:outline-none rounded shadow-black' required />
                        <input type="email" name='email' placeholder='Enter Your Email' className='w-full text-white  placeholder:text-white placeholder:font-semibold  mt-5 p-2 bg-simple shadow focus:outline-none rounded shadow-black' required />
                        <textarea placeholder='Message' name='message' type="text" className='w-full text-white placeholder:text-white placeholder:font-semibold h-24 mt-5 p-2 bg-simple shadow focus:outline-none rounded shadow-black' required />
                        <div className='flex justify-center mt-5'>
                            <button className="btn bg-black text-white opacity-60 px-10 border-0 rounded-lg font-semibold p-2">Send </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;