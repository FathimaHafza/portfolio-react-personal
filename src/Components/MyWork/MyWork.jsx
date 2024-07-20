import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <hr />
        </div>
        <div className="mywork-container">
           {mywork_data.map((work,index)=>{
            return <img key={index}src={work.w_img} />
           })}
        </div>
        {/* <div className="mywork-showmore">
            <p>ShowMore</p>
            <img src={arrow_icon} />
        </div> */}
    </div>
  )
}

export default MyWork