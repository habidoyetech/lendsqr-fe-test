import React, { useState } from 'react';
import LogoWord from '../../images/lendsqr.svg'
import Logo from '../../images/Union.svg'
import SideImage from '../../images/pablo-sign-in 1.svg'
import './auth.scss'

const Auth = () => {

  const [type, setType] = useState('password')

  const changeInputType =  () => {
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  return (
    <div className='log-in-page'>
      <div className='log-in container'>
        <div className='left-log-in-page container'>
          <div>
            <div className='company-logo'>
              <img className='first-logo' src={Logo} alt="Logo" />
              <img className='second-logo' src={LogoWord} alt="Logo" />
            </div>
            <div className='login-image'>
              <img src={SideImage} alt="" />
            </div>
          </div>  
        </div>
        <div className='right-log-in-page container form page'>
          <div className="form-container">
            <h1> Welcome! </h1>
            <p>Enter Login details</p>
            <form action="#">
              <div className='input-block email-container'>
                <input type="email" id='email' required/>
                <label className='placeholder' htmlFor="email">Email</label>
              </div>
              <div className='input-block password-container'>
                <input type={type} id='password' required/>
                <label className='placeholder' htmlFor="password">Password</label>
                <i onClick={changeInputType} id='togglePassword'>show</i>
              </div>
              <div className='forget-password-link-container'>
                <a className='forget-password-link' href="#">Forgot Password?</a>
              </div>
              <button className='log-in-button' type='submit'>Log in</button>
            </form>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Auth;