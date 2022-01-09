import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
     <div className="home">
         <div className="textbox">
               <h4>Crash Code Academy <span>CCA</span></h4>
             <p>Making tech to be easily accessed and taught all around the world</p>
             <button className='btn'><Link to='/register'>Apply now</Link></button>
         </div>
     </div>
    )
}

export default Home
