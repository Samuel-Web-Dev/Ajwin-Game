import React from 'react'
import './SplashScreen.css'

import logo from 'C:/Users/TOSHIBA/Desktop/Vista-create-app/src/assets/WhatsApp Image 2023-11-19 at 20.01.30_9af9c1d8.jpg'


const SplashScreen = () => {

  return ( 
    <div className='splash-screen'>
        <img src={logo} alt="logo" />
        <div>AJWIN ONLINE GAME</div>
    </div>
  )
}

export default SplashScreen