import React from 'react';
import './header.css';
import CTA from "./CTA"
import SALCHAS from "../../assets/salchas.png"

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Piero Olivares</h2>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA></CTA>

        <div className="me">
          <img src={SALCHAS} alt="salchas"/>
        </div>

        <a href="contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
