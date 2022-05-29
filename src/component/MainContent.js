import React from 'react'
import EmailLogo from '../images/Icon.svg'
import LinkedInLogo from '../images/Vector.svg'

const MainContent = () => {
  return (
    <main>
      <div className="bio">
        <h1 className='name'>Laura Smith</h1>
        <h3 className='skill'>Frontend Developer</h3>
        <h3 className='website-name'>laurasmith.website</h3>
      </div>

      <div className="social-media-link">
        <div className="email">
            <img src= {EmailLogo} alt="" />
            <h4 className='email-title'>Email</h4>
        </div>

        <div className="linkedIn">
            <img src= {LinkedInLogo} alt="" />
            <h4 className='LinkedIn-title'>LinkedIn</h4>
        </div>
      </div>

      <div className="about">
        <h2 className='about-title'>About</h2>
        <p className='about-description'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      </div>

      <div className="interest">
        <h2 className='interest-title'>Interest</h2>
        <p className='interest-description'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>

    </main>
  )
}

export default MainContent
