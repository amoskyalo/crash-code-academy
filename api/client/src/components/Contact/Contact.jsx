import React,{ useState} from 'react'
//import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap';
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

      <div className="form" >
      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your full name"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            
            placeholder="Enter your email"
            
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            
            placeholder="Enter subject"
           
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            
            rows="3"
            placeholder="Enter your message"
            
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
   {error && <span style={{color:"red", marginTop:"10px"}}>Message not sent</span>} 
</div>
    )
}

export default Contact
