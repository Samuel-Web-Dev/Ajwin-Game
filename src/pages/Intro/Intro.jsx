import React, { useState, useEffect } from 'react'
import OnboardingScreen from '../../component/onboarding/OnboardingScreen';
import SplashScreen from '../../component/splash/SplashScreen';

import './Intro.css'

const Intro = () => {
  const [shouldRenderAnotherComponent, setShouldRenderAnotherComponent] = useState(false);

  useEffect(() => {
    // Set a timeout to update the state after a certain amount of time (e.g., 5000 milliseconds for 5 seconds)
    const timeoutMilliseconds = 5000;

    const timeoutId = setTimeout(() => {
      // After the timeout, update the state to trigger rendering of AnotherComponent
      setShouldRenderAnotherComponent(true);
    }, timeoutMilliseconds);

    // Clear the timeout when the component is unmounted (cleanup)
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className='intro'>
       {shouldRenderAnotherComponent ? <OnboardingScreen /> : <SplashScreen />}
    </div>
  )
}

export default Intro