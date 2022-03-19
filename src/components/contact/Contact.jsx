import React from 'react';
import './contact.css';
import { AiOutlineMail } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import { SiWhatsapp } from "react-icons/si"

import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pvkftk9', 'template_1esw22m', form.current, '6ZNb-kNsLMGtyWHMn')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>pieroop96@gmail.com</h5>
            <a href="mailto:pieroop96@gmail.com" target="_blank">Send a message </a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+34 677 60 66 22</h5>
            <a href="https://api.whatsapp.com/send?phone=34677606622" target="_blank">Send a message </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Piero Olivares</h5>
            <a href="https://www.linkedin.com/in/piero-olivares/" target="_blank">Send a message </a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" value="Send" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact
