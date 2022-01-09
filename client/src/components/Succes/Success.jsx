import React from 'react'
import './Success.css'
import { GrSend } from 'react-icons/gr';

const Success = () => {
    return (
        <div className='success'>
            <div className="success-m">
            <h3>Thank you for filling out your information!</h3>
            <div className="success-logo">
              <GrSend/>  
            </div>
            </div>
           
        </div>
    )
}

export default Success
