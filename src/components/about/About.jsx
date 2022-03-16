import React from 'react';
import './about.css';
import SALCHAS from "../../assets/salchas.png";
import { FaAward } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { FaFolderOpen } from "react-icons/fa"


const About = () => {
  return (
    <section id="about">
    <h5>Get to Know</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={SALCHAS} alt="About Image"/>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>estudios</small>
          </article>

          <article className="about__card">
            <HiAcademicCap className="about__icon"/>
            <h5>Academy</h5>
            <small>estudios</small>
          </article>

          <article className="about__card">
            <FaFolderOpen className="about__icon"/>
            <h5>Projects</h5>
            <small>estudios</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor magni dignissimos iste accusantium, placeat voluptas mollitia. In blanditiis magni magnam architecto non aut, ratione dignissimos, tenetur optio, quia explicabo!
        </p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
