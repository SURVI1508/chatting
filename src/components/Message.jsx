import React from 'react'
import './styles.css'
const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="./images/wallpaper.jpg" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Heyy</p>
        <img src="./images/wallpaper.jpg" alt="" className='image__message' />
      </div>
    </div>
  )
}

export default Message