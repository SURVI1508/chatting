import React from 'react'
import './styles.css'
import { IoMdAttach } from 'react-icons/io';
import { AiOutlineSend } from 'react-icons/ai';

import { BsImage } from 'react-icons/bs';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Message' className='message__input' />
      <div className="send">
        <IoMdAttach className='send_icon' />
        <input type="file" id='file' style={{ display: "none" }} />
        <label style={{ margin: "0px 0" }} htmlFor="file"><BsImage className='send_icon' /></label>
        <AiOutlineSend className='send_icon' />
      </div>
    </div>
  )
}

export default Input