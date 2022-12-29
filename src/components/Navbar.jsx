import React from 'react'
import './styles.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'><h3>Logo</h3></span>
      <div className='user'>
        <img src="./images/wallpaper.jpg" alt="" />
        <span>Johan</span>
        <button className='logOut'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar