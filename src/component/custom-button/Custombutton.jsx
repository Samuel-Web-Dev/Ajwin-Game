import React from 'react'

import './Custombutton.css'

const Custombutton = ({ children }) => {
  return (
    <button className='custom-button'>{children}</button>
  )
}

export default Custombutton