import React from 'react'
import ux from './ux.png';
import backend from './backend.png';
import data from './dashboard.png';
import machine from './machine-learning.png';
import app from './app-development.png';
import analysis from './dashboard.png';
import './Courses.css';

const Courses = () => {
    return (
           <>
        <h4 className='title-course'> Our Courses </h4>
        <div className='courses'>
            <div className="course">
                <div className="course-items">
                <img className='course-img' src={ux} alt='frontend'/>
                 <h4>Frontend Development</h4>
                </div>
            </div>

            <div className="course">
                <div className="course-items">
                <img className='course-img' src={backend} alt='frontend'/>
                 <h4>Backend Development</h4>
                </div>
            </div>

            <div className="course">
                <div className="course-items">
                <img className='course-img' src={data} alt='frontend'/>
                 <h4>Data Science</h4>
                </div>
            </div>

            <div className="course">
                <div className="course-items">
                <img className='course-img' src={machine} alt='frontend'/>
                 <h4>Machine Learning</h4>
                </div>
            </div>

            <div className="course">
                <div className="course-items">
                <img className='course-img' src={app} alt='frontend'/>
                 <h4>Mobile Development</h4>
                </div>
            </div>

            <div className="course">
                <div className="course-items">
                <img className='course-img' src={analysis} alt='frontend'/>
                 <h4>Data Analysis</h4>
                </div>
            </div>  
            
        </div>
        </>
    )
}

export default Courses
