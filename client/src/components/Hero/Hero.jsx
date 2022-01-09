import React from 'react';
import Home from '../home/Home';
import Courses from '../Courses/Courses';
import Apply from '../Apply/Apply';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';
//import Jump from 'react-reveal/Jump'
const Hero = () => {
    return (
        <>
       <Home/>
      <Courses/> 
       <Apply/>
       <Team/>
       <Footer/>
        </>
    )
}

export default Hero
