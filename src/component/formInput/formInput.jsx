import React from 'react'

import './formInput.css'

const FormInput = ({ icon, type, placeholder, password }) => {
  return (
    <div className="input-group">
     { icon }
    <input type={type} placeholder={placeholder} />
    { password }
  </div>
  )
}

export default FormInput