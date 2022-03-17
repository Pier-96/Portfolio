import React from 'react'
import './experience.css'
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { SiJavascript } from "react-icons/si"
import { SiBootstrap } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { DiRuby } from "react-icons/di"
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJava } from "react-icons/si"


const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiHtml5 className="experience__details-icons"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiCss3 className="experience__details-icons"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icons"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiBootstrap className="experience__details-icons"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiReact className="experience__details-icons"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__details-icons" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiRuby className="experience__details-icons"/>
              <div>
                <h4>Ruby (RoR)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details-icons"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiPython className="experience__details-icons"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FaNodeJs className="experience__details-icons"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJava className="experience__details-icons"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience
