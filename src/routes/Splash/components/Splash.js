import React from 'react'
import PropTypes from 'prop-types'
import SoundCloudLogo from '../assets/soundcloud_logo.svg.png'
import './Splash.scss'

export const Splash = (props) => (
  <div className='container'>
    <div className='splash-flex border'>
      <img className='logo' src={SoundCloudLogo} />
      <div className='buttons'>
        <button className='sign-in'>Sign In</button>
        <button className='create-account'>Create account</button>
      </div>
    </div>
  </div>
)

Splash.propTypes = {

}

export default Splash
