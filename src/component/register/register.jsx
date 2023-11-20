import React from 'react'
import { Link } from 'react-router-dom';

import { FaUser } from "react-icons/fa6";
import { FaLock, FaEyeSlash } from "react-icons/fa";

import FormInput from '../formInput/formInput'
import './register.css'
import Custombutton from '../custom-button/Custombutton';


const Register = () => {

  return (
    <div className='register-account'>
      <h2>Register New Account</h2>

      <FormInput icon={<FaUser />} type="text" placeholder='First Name' />
      <FormInput icon={<FaUser />} type="text" placeholder='Last Name' />
   
       <FormInput 
       icon={<FaLock />}
       placeholder='password'
       password={<FaEyeSlash style={{fontSize: '1.3rem', cursor: 'pointer'}} />}
       type='password' />

       <FormInput 
       icon={<FaLock />}
       placeholder='Re-enter password'
       password={<FaEyeSlash style={{fontSize: '1.3rem', cursor: 'pointer'}} />}
       type='password' />

       <Custombutton>
        SIGN UP
       </Custombutton>

      <p>Already have an account? <Link to='/login' className='login__button'>LOGIN</Link></p>
    </div>
  )
}

export default Register