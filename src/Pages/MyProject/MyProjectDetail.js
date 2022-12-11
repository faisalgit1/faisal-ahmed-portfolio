import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ProjectDetails = () => {
    const project = useLoaderData();
    console.log(project);
    const { name,
        img,
        image1,
        image2,
        description,
        githubClient,
        githubServer,
        link,
        features1,
        features2,
        features3,
        features4,
        features5
    } = project;


    return (
        <div id='app' className='my-32'>
            <div className='my-7 px-10 lg:px-0 space-y-24'>

                <article className='lg:flex lg:flex-wrap md:justify-between md:items-center' >
                    <picture className='w-full space-y-4 md:w-6/12 shadow-lg'>


                        <img src={img} loading='lazy' alt={project.title} className='rounded-lg' />
                        <img src={image1} loading='lazy' alt={project.title} className='rounded-lg' />
                        <img src={image2} loading='lazy' alt={project.title} className='rounded-lg' />
                    </picture>
                    <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                        <h3 className='lg:text-5xl text-4xl font-bold '>{project.name}</h3>
                        <p>{description}</p>
                        {/* <div className='flex overflow-auto space-x-3 pb-2'>
                            {project.tools.map((disc, index) => (
                                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm' key={index}>
                                    {disc}
                                </span>
                            ))}
                        </div> */}
                        <div>
                            <h1 className='text-3xl'>Features</h1>
                            <ul className='list-outsides space-y-1 mt-5'>

                                <li className='list-inside flex items-center'>
                                    <img className='w-5' src="https://i.ibb.co/dPHhvr9/images-removebg-preview.png" alt="" />
                                    <h5 className='ml-3'>{features1}</h5>
                                </li>
                                <li className='list-inside flex items-center'>
                                    <img className='w-5' src="https://i.ibb.co/dPHhvr9/images-removebg-preview.png" alt="" />
                                    <h5 className='ml-3'>{features2}</h5>
                                </li>
                                <li className='list-inside flex items-center'>
                                    <img className='w-5' src="https://i.ibb.co/dPHhvr9/images-removebg-preview.png" alt="" />
                                    <h5 className='ml-3'>{features3}</h5>
                                </li>
                                <li className='list-inside flex items-center'>
                                    <img className='w-5' src="https://i.ibb.co/dPHhvr9/images-removebg-preview.png" alt="" />
                                    <h5 className='ml-3'>{features4}</h5>
                                </li>
                                <li className='list-inside flex items-center'>
                                    <img className='w-5' src="https://i.ibb.co/dPHhvr9/images-removebg-preview.png" alt="" />
                                    <h5 className='ml-3'>{features5}</h5>
                                </li>
                            </ul>
                        </div>
                        <div className='w-auto lg:flex flex-row justify-items-center items-center space-y-3 lg:space-x-5 relative'>

                            <a className='flex p-2 rounded-xl hover:scale-110 bg-gray items-center justify-items-center' href={githubClient} target='_blank' rel='noreferrer'>
                                <h5 className='mr-2'>GitHub Client</h5>
                                <img className='w-8' src='https://i.ibb.co/BrBYDKS/1200px-External-link-01-16x16-svg.png' alt='link to live website' width='24px' height='24px' />
                            </a>
                            {githubServer && <a className='flex p-2 rounded-xl hover:scale-110 bg-gray items-center justify-items-center' href={githubServer} target='_blank' rel='noreferrer'>
                                <h5 className='mr-2'>GitHub Server</h5>
                                <img className='w-8' src='https://i.ibb.co/BrBYDKS/1200px-External-link-01-16x16-svg.png' alt='link to live website' width='24px' height='24px' />
                            </a>}
                            <a className='flex p-2 rounded-xl hover:scale-110 bg-gray items-center justify-items-center' href={link} target='_blank' rel='noreferrer'>
                                <h5 className='mr-2'>Live site</h5>
                                <img className='w-8' src='https://i.ibb.co/BrBYDKS/1200px-External-link-01-16x16-svg.png' alt='link to live website' width='24px' height='24px' />
                            </a>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    );
};

export default ProjectDetails;