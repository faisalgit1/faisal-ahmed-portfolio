import React from 'react';
import Header from './Header';
import Skill from './About';
import MyProjects from '../MyProject/MyProjects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Skill></Skill>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;