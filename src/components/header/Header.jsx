import React from 'react';
import './header.css';
import CTA from "./CTA"
import SALCHAS from "../../assets/salchas.png"
import HeaderSocials from './HeaderSocials';


function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Piero Olivares</h2>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={SALCHAS} alt="salchas"/>
        </div>

        <a href="#about" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
