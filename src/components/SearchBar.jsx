import React from 'react'
import "../components/searchbar.css"
import searchIcon from "../images/search.png"

const SearchBar = () => {
  return (
    <div className='searchbar-container'>
        <input
          type="text"
          placeholder="Enter Your Movie..."
        />
        <img src={searchIcon} alt="search icon" className='searchIcon' />
    </div>
  )
}

export default SearchBar