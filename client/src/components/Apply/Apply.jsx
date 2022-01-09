import React from 'react';
import './Apply.css';
import { Link } from 'react-router-dom';

const Apply = () => {
    return (
        <div className='Apply'> 
            <div className="apply-content">
                <p>We are a learning community to help all those intrested in tech.learning never exhausts the mind, for the things we have to learn before we can do them,we learn by doing them. click in the button to apply for a course</p>
                <button className='btn'><Link to='/register'>Apply now</Link></button>
            </div>
        </div>
    )
}

export default Apply
