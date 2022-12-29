import React from 'react'
import './styles.css'
const Search = () => {
  return (
    <>
      <div className='search'>
        <div className="searchInput">
          <input type="text" placeholder='find a user' className='search__input' />
        </div>
        <div className='userChat'>
          <img src="./images/wallpaper.jpg" alt="" />
          <div className="userChatInfo">
            <span>Jane</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search