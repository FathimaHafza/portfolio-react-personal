import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_pic from '../../assets/profile_pic.jpeg'
const  Hero= () => {
  return (
    <div id='home'className='hero'>
        <img src={profile_pic} />
        <h1>
        <span>I'm Hafza,</span>  a creative frontend developer.</h1>
        <p>Passionate front-end developer crafting intuitive and responsive web experiences with modern technologies and design principles.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect with me</AnchorLink></div>
            
        </div>
    </div>
  )
}

export default Hero;