import React from 'react'
import { Link } from 'react-router-dom'
import OnboardingLogo from 'C:/Users/TOSHIBA/Desktop/Vista-create-app/src/assets/Onboard.jpg'


import './OnboardingScreen.css'

const OnboardingScreen = () => {
  return (
    <div className='onboarding'>
       <img src={OnboardingLogo} className='onboarding__logo' />

       <div className="onboarding__content">
         <h2>Design on the go with VistaCreate</h2>
         <p>Start designing with VistaCreate and get access to our complete set of powerful design tools, including VistaPrint, and 99designs by Vista</p>
       </div>

       <Link to='/login' className='onboarding__button'>Get started</Link>
    </div>
  )
}

export default OnboardingScreen