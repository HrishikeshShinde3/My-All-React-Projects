import React, { useRef,useState } from 'react';
import './Contact.css'
import { faHome } from '@fortawesome/free-solid-svg-icons';

import emailjs from '@emailjs/browser';




 function Container2  () {
    const ref=useRef()
    const [success,setSuccess]=useState(null)


    const handleSubmit =e=>{
    e.preventDefault()

  emailjs.sendForm('service_g9bjkbo', 'template_50ylqs9', ref.current, 'qOF0CZf1jQISppL8g')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });

}

  return (
    <>
      <div className='Contact-mainContainer-contact'> 
        <form ref={ref} onSubmit={handleSubmit} className='Contact-Form'>
          <h1 className='Contact-Us'>CONTACT FORM</h1>
           <input className='name' placeholder='Enter Your Name' name='name'></input>
           <input className='email' placeholder='Enter Your Email-ID' name='email'></input>
           <input className='message'  placeholder='Write Your message here' name='message'></input>
            <button type='submit' className='button'>Submit</button>
            {success && "Your message has been sent. We'll get back to you soon :) "}
        </form>

        
        <footer className="footer">
        <div className="footer-content">
          <h3>© 2023 My Portfolio. All rights reserved.</h3>
          <div className="footer-links">
            <h4> Home</h4>
              <h4>About</h4>
            <h4>Contact</h4>
          </div>

          <div className="footer-links">
            <h4> Home</h4>
              <h4>About</h4>
            <h4>Contact</h4>
            <h4>Information</h4>
          </div>
      </div>
    </footer>

        
      
      

      
     </div>
    </>
  )
}


export default function Contact() {
  return (
    <>
    <div className='Contact-Section'>  

        <Container2/>
       
    </div>
    
    </>
  )
}
