import React,{ useState,useRef} from 'react'
//import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import './Contact.css';


const Contact = () => {
  const [loader, setLoader] = useState(false);
  const form = useRef();


 const sendEmail = (e) => {
 e.preventDefault();
 
 emailjs.sendForm('service_bjrnaqc','template_y707vwi',form.current,'user_DDiWYW49rwBc0ZfRYl7dO')
 .then(()=>{
  setLoader(false);
        alert("Your message has been submitted👍");
 }, (error) => {
  alert(error.message);
  setLoader(false);
 });
 form.current.reset()
 };
    return (
     
      <form ref={form} className="form" onSubmit={sendEmail}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        type='text'
       
      />

      <label>Email</label>
      <input
        type='email'
        placeholder="Email"
       
      />

      <label>Message</label>
      <textarea name='message'
        placeholder="Message"
      
      ></textarea>

      <button
        type="submit"
       className='btn' style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>

    )
}

export default Contact
