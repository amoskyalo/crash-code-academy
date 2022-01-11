import React from 'react'
import './Footer.css'

const Footer = () => {
    const date  = new Date().getFullYear();
    return (
        <div  className='Footer'>
           <div className="footer-info">
               <h4 className='footer-title'><b>Crash Code Academy</b></h4>
               <p className='footer-para'>Crash Code we make the dream a reality</p>
               <div className="icons">
               
               </div>
           </div>
           
           <div className="footer-info">
               <h4 className='footer-title'>Get in touch</h4>
               <p className='footer-para'>
                +254794433701 / +254791686851/
                crashcode@gmail.com
               </p>
              
           </div>
            
           <div className="footer-info">
            <h4 className='footer-title'>Newsletter</h4>

            <div className="newsletter">
            <input type='email' className='input' placeholder='email'/>
            <i class="fas fa-envelope"></i>
		    <div className="btn">Subscribe</div> 
            </div>  
         

          <div className="reserved">
              <span> &#169; {date} <b> Crash Code Academy. All rights and reserved</b></span>
          </div>
              
           </div>
        </div>
    )
}

export default Footer
