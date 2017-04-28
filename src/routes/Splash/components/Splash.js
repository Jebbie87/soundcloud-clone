import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SoundCloudLogo from '../assets/soundcloud_logo.svg.png'
import './Splash.scss'

export default class Splash extends Component {
  render() {
    return (
      <div className='container'>
        <div className='splash-flex border'>
          <img className='logo' src={SoundCloudLogo} />
          <div className='buttons'>
            <button className='sign-in'>Sign In</button>
            <button className='create-account'>Create account</button>
          </div>
          <div className='promotion'>
            <h1>Connect on SoundCloud</h1>
            <h4>Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</h4>
            <button>Sign up for free</button>
          </div>
        </div>
      </div>
    )
  }
}

Splash.propTypes = {

}
