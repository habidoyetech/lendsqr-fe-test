import React, { useState } from 'react';
import LogoWord from '../../images/lendsqr.svg'
import Logo from '../../images/Union.svg'
import SideImage from '../../images/pablo-sign-in 1.svg'
import './auth.scss'

const Auth = () => {

  const [type, setType] = useState('password')
  const [authMode, setAuthMode] = useState('signIn');

  const changeAuthMode = () => {
    setAuthMode(authMode === 'signIn'? 'signUp': 'signIn')
  }

  const changeInputType =  () => {
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  if (authMode === 'signIn') {
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
                  <span className='forget-password-link' href="#">Forgot Password?</span>
                </div>
                <button className='log-in-button' type='submit'>Log in</button>
                <p className='no-account'>Don't have an account? Please <span onClick={changeAuthMode}>Sign Up</span></p>
              </form>
            </div>
          </div>
        </div> 
      </div>
    )

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
            <div className="form-container ">
              <h1> Welcome!</h1>
              <p>Please Sign Up</p>
              <form className='grid' action="#">
                <div className='input-block first-name-container'>
                  <input type="text" id='firstName' required/>
                  <label className='placeholder' htmlFor="firstName">First Name</label>
                </div>
                <div className='input-block second-name-container'>
                  <input type="text" id='secondName' required/>
                  <label className='placeholder' htmlFor="secondName">Second Name</label>
                </div>
                <div className='input-block email-container'>
                  <input type="email" id='email' required/>
                  <label className='placeholder' htmlFor="email">Email</label>
                </div>
                <div className='input-block phone-container'>
                  <input type="number" id='phone' required/>
                  <label className='placeholder' htmlFor="phone">Phone</label>
                </div>
                <div className='input-block password-container'>
                  <input type={type} id='password' required/>
                  <label className='placeholder' htmlFor="password">Password</label>
                  <i onClick={changeInputType} id='togglePassword'>show</i>
                </div>
                <div className='input-block retype-password-container'>
                  <input type={type} id='password' required/>
                  <label className='placeholder' htmlFor="password">Retype Password</label>
                  <i onClick={changeInputType} id='togglePassword'>show</i>
                </div>
              
                <button className='sign-up-button wide' type='submit'>Sign Up</button>
                <p className='no-account wide'>Already have an account? Please <span onClick={changeAuthMode}>Sign In</span></p>
              </form>
            </div>
          </div>
        </div> 
      </div>
  )

  
}

export default Auth;
