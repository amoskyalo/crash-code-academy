import React,{ useState} from 'react'
//import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [loader, setLoader] = useState(false);


 const sendEmail = (e) => {
 e.preventDefault();
 
 emailjs.sendForm('service_bjrnaqc','template_y707vwi',e.target,'user_DDiWYW49rwBc0ZfRYl7dO')
 .then(()=>{
  setLoader(false);
        alert("Your message has been submitted👍");
 }, (error) => {
  alert(error.message);
  setLoader(false);
 });
 e.target.reset()
 };
    return (
     
      <form className="form" onSubmit={sendEmail}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        type='text'
        value='name'
      />

      <label>Email</label>
      <input
        type='email'
        placeholder="Email"
        value='email'
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value='message'
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>

    )
}

export default Contact
