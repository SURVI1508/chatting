import React from 'react'
import './styles.css'
import { FaVideo } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineMoreVert } from 'react-icons/md';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='caht'>
      <div className="catInfo">
        <span>Jane</span>
        <div className="chatIcon">
          <FaVideo className='icon' />
          <BiUserCircle className='icon' />
          <MdOutlineMoreVert className='icon' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat