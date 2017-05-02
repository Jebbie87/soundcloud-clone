import React from 'react'
import { IndexLink, Link } from 'react-router'
import Logo from './assets/soundcloud_logo.jpg'
import SearchButton from './assets/search-button.jpg'
import './Header.scss'

export const Header = () => (
  <div className='header'>
    <div className='logo'>
      <Link to='/main'><img src={Logo}></img></Link>
    </div>

    <div className='user-nav'>
      <Link to='/main' className='home'><h6>Home</h6></Link>
      <Link to='/collection' className='collection'><h6>Collection</h6></Link>
    </div>

    <form className='search-form'>
      <input type='text' placeholder='Search' className='search-bar' />
      <img src={SearchButton}></img>
    </form>

    <div className='user-profile-nav'>
      <div className='user-links'>
        <Link to='/upgrade'><h6 className='upgrade'>Upgrade</h6></Link>
        <Link to='/upload'><h6>Upload</h6></Link>
        <Link to='/profile' className='user-profile'><img src={SearchButton}></img><h6>Jeffrey Chang &nbsp; ^</h6></Link>
      </div>

      <div className='user-icons'>
        <h6>Icon</h6>
        <h6>Icon</h6>
        <h6>Icon</h6>
      </div>
    </div>

  </div>
)

export default Header
