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
          <div className='company-logo'>
            <img className='first-logo' src={Logo} alt="Logo" />
            <img className='second-logo' src={LogoWord} alt="Logo" />
          </div>
          <div className='login-image'>
            <img src={SideImage} alt="" />
          </div>
        </div>
        <div className='right-log-in-page container form page'>
          <h1> Welcome </h1>
          <p>Enter Login details</p>
          <form action="#">
            <div className='email-container'>
              <label htmlFor="email">Email</label>
              <input type="email" required/>
            </div>
            <div className='password-container'>
              <label htmlFor="password">Password</label>
              <input type="password" />
            </div>
            <div>
              <a href="#">Forgot Password</a>
            </div>
            <button>Log in</button>
          </form>
        </div>

      </div> 
    </div>
  )
}

export default LogInPage
