import React from 'react';
import { FaRegHeart, FaArrowRight } from 'react-icons/fa';

const MyProjectCard = ({ project }) => {

    const { name, img, link } = project
    return (
        <div>
            <div className=" w-[95%] card-shadow h-[26rem] mx-auto rounded-xl  my-3 relative" data-aos="zoom-in-up" data-aos-duration='1000' >
                <div className='p-5 transition-transform duration-500 transform ease-in-out hover:scale-110'>
                    <img className=" rounded-lg h-56 w-full" src={img} alt="" />
                </div>
                <div className="px-5 ">

                    <h5 className="text-xl tracking-tight text-gray-700 mt-4 mb-2 monoster-fonts">{name}</h5>

                </div>
                <div className=' px-5 mt-3'>
                    <a href={link} target="_blank" className='card-shadow monoster-fonts text-gray-500 hover:bg-[#FF014F] hover:text-white px-5 py-4 rounded-md shadow-lg text-sm absolute bottom-5 right-4  flex gap-1 items-center'> View Project <FaArrowRight /> </a>

                </div>
            </div>
        </div>
    );
};

export default MyProjectCard;