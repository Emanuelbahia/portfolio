import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from 'react-bootstrap/Toast';
import "./contact.css"

export default function Contact() {

    const [show, setShow] = useState(false);
    const form = useRef();
    const name = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm('service_326s5vb', 'template_bizzg3p', form.current, 'dRlDu59wtjIMhCw_X')
      .then((result) => {
          console.log(result.text);
          form.current.reset(); //para resetear el formulario
      }, (error) => {
          console.log(error.text);
      }); 
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail} className='form-contact'>
      <label className='label-name-email'>Name</label>
      <input type="text" name="user_name" className='input-name-email' ref={name} required />
      <label className='label-name-email'>Email</label>
      <input type="email" name="user_email" className='input-name-email' required/>
      <label className='label-name-email'>Message</label>
      <textarea name="message" className='text-area'/>
      <input type="submit" value="Send" className='button-send' onClick={() => setShow(true)}/>  
      <Toast className='show-toast' onClose={() => setShow(false)} show={show} delay={3000} autohide  >
        <Toast.Body>Your message has been successfully sent !</Toast.Body>
      </Toast>   
    </form>
    
  </>
  )
}
