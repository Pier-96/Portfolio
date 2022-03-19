import React from 'react';
import './footer.css';
import { BsTwitter } from "react-icons/bs"
import { FiGithub } from "react-icons/fi"
import { BsLinkedin } from "react-icons/bs"


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
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com"><BsTwitter /></a>
        <a href="https://github.com"><FiGithub /></a>
        <a href="https://github.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made by Piero  </small>
      </div>
    </footer>
  )
}

export default Footer
