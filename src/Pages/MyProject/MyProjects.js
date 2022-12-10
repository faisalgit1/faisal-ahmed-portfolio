import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyProjectCard from './MyProjectCard'

const MyProjects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])



    return (
        <div className='mt-10  ' id='projects'>
            <h1 className='lg:text-4xl text-gray-600 monoster-fonts font-semibold text-2xl'>My Projects</h1>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-7 mt-5 mb-8">

                {
                    projects.map((project, index) => <MyProjectCard

                        key={index}
                        project={project}></MyProjectCard>)
                }

            </div>
        </div>
    );
};

export default MyProjects;