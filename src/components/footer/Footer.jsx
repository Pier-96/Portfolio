import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Piero</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
       <div className="footer__socials">

       </div>
      </ul>
    </footer>
  )
}

export default Footer
