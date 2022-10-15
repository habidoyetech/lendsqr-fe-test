import React from 'react';
import LogoWord from '../../images/lendsqr.svg'
import Logo from '../../images/Union.svg'
import SideImage from '../../images/pablo-sign-in 1.svg'
import './loginpage.scss'

const LogInPage = () => {
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
                <input type="email" required/>
                <label className='placeholder' htmlFor="email">Email</label>
              </div>
              <div className='input-block password-container'>
                <input type="password" />
                <label className='placeholder' htmlFor="password">Password</label>
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

export default LogInPage
