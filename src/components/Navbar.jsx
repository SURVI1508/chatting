import React from 'react'
import './styles.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'><h3>Logo</h3></span>
      <div className='user'>
        <img src="./images/wallpaper.jpg" alt="" />
        <span>Johan</span>
        <NavLink to='/signin'>
        <button className='logOut'>Logout</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar