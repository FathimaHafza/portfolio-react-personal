import React from 'react'
import './About.css'
import profile_pic from '../../assets/profile_pic.jpeg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1> 
        </div>
        <div className="about-sections">
             <div className="about-left">
                <img src={profile_pic}/>
             </div>
             <div className="about-right">
                <div className="about-para">
                    <p>I am an undergraduate student at the University of Moratuwa, enrolled in the Faculty of Information Technology. </p>
                   <p>My academic journey has equipped me with a strong foundation in IT principles and practices. </p>
                  <p>I am particularly passionate about front-end development, where I enjoy creating visually appealing and user-friendly web interfaces.</p>
                </div>
                <div className="about-skils">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                </div>
             </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>01+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
           
        </div>
     
    </div>
  )
}

export default About