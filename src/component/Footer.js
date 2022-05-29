import React from 'react'
import TwitterLogo from '../images/Twitter Icon.svg'
import FacebookLogo from '../images/Facebook Icon.svg'
import InstagramLogo from '../images/Instagram Icon.svg'
import GithubLogo from '../images/GitHub Icon.svg'

const Footer = () => {
  return (
    <footer>
      <div className="logo-align">
        <img src= {TwitterLogo} alt="" />
        <img src= {FacebookLogo} alt="" />
        <img src= {InstagramLogo} alt="" />
        <img src= {GithubLogo} alt="" />
      </div>
    </footer>
  )
}

export default Footer
