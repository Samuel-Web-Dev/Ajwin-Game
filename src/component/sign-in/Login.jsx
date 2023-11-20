import React from "react";
import FormInput from "../formInput/formInput";

import svgLogin from 'C:/Users/TOSHIBA/Desktop/Vista-create-app/src/assets/login-image.png'

import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import Custombutton from "../custom-button/Custombutton";

import './login.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="sign-in">
      <img src={svgLogin} className="sign-in__logo" />

      <div
        className="sign-in__form-box
        "
      >
        <form className="sign-in__form">
          <FormInput icon={<FaUser />} type="text" placeholder='username' />

          <FormInput icon={<FaLock />} type="password" placeholder='password' />

          <Custombutton>
            Login
          </Custombutton>

          <p>Don't have an account? <Link to='/register' className="signup__button">Sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
