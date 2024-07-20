import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import profile_pic from '../../assets/profile_pic.jpeg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                   <img src={profile_pic} />
                   <p>I'm an undergraduate student at the University of Moratuwa, with over a year of experience in front-end projects.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon}/>
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">
                    Subscribe  </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
         <p className="footer-bottom-left">© 2024 Hafza Ramlan. All rights reserved.</p>
         <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
         </div>
        </div>
    </div>
  )
}

export default Footer