import React from 'react'
import Header from '../../../components/Header'
import './Main.scss'

export const Main = () => (
  <div>
    <Header />
    <div className='user-list'>
      <h1>Stream</h1>
      <h1>Chart</h1>
      <h1>Discover</h1>
    </div>
  </div>
)

export default Main
