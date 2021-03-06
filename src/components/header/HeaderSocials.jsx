import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsSlack } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/piero-olivares/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Pier-96" target="_blank"><BsGithub/></a>
      <a href="https://linkedin.com" target="_blank"><BsSlack /></a>
    </div>
  )
}

export default HeaderSocials
