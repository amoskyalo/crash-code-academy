import React,{ useState} from 'react'
//import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

  const [error,setError] = useState(false);


 const sendEmail = (e) => {
 e.preventDefault();
 
 emailjs.sendForm('service_bjrnaqc','template_y707vwi',e.target,'user_DDiWYW49rwBc0ZfRYl7dO')
 .then((result)=>{
   console.log(result.text);
 }, (error) => {
  setError(true);
 });
 e.target.reset()
 };
    return (

      <div className="contactme" id="contact">
      <div className="contactOverlay">
        <div className="container">
          <div className="form">
            <form action="" onSubmit={sendEmail}>
              <div className="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input className="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" required />
                <br />
              </div>
              <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div className="row">All Done</div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {error && <span style={{color:"red", marginTop:"10px"}}>Message not sent</span>} 
    </div>
  

    )
}

export default Contact
