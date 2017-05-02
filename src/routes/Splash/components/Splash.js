import React, { Component } from 'react'
import Signup from '../../../components/SignupModal'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import SoundCloudLogo from '../assets/soundcloud_logo.svg.png'
import './Splash.scss'

export const Splash = (props) => {
  const handleSignup = () => props.signupClicked(true)
  const handleSignupClose = () => props.signupClicked(false)
  const handleSignin = () => console.log('sign in')

  return (
    <div className='container'>
      <div className='splash-flex'>
        <img className='logo' src={SoundCloudLogo} />
        <div className='buttons'>
          <Link to='/main'><button onClick={handleSignin} className='sign-in'>Sign In</button></Link>
          <button onClick={handleSignup} className='create-account'>Create account</button>
        </div>
        <div className='promotion'>
          <h1>Connect on SoundCloud</h1>
          <h4>Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</h4>
          <button onClick={handleSignup}>Sign up for free</button>
        </div>
      </div>
      <Signup modalState={props.signupModal} closeModal={handleSignupClose}/>
    </div>
  )
}

export default Splash

Splash.propTypes = {

}
