import React from 'react';
import Header from './Header';
import MyProjects from '../MyProject/MyProjects';
import Contact from '../Contact/Contact';
import About from './About';
import MySkill from '../MySkill/MySkill';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <MySkill></MySkill>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;