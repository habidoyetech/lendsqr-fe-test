import React from 'react';
import './dashboardoptions.scss';
import InputField from './InputField';
import { ButtonNoP } from './Button';

interface updateUserProps {
  showUpdate: boolean
  
}

interface filterUserProps {
  showFilter: boolean
  
}

export function DashboardUpdateUserStatusOptions({showUpdate, ...props}:updateUserProps) {
  return (
    <>
      <div className={`updateUserContainer ${showUpdate ? 'open': 'close'}`}>
        <div className='updateContainer'>
          <div className='updateUserIcon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16"> <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg>
          </div>
          <div className='updateUser'>
            View Details
          </div>
          
        </div>
        <div className='updateContainer'>
          <div className='updateUserIcon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-x" viewBox="0 0 16 16"> <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> <path fill-rule="evenodd" d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/> </svg>
          </div>
          <div className='updateUser'>
            Blacklist User
          </div>
        </div>
        <div className='updateContainer'>
          <div className='updateUserIcon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-check" viewBox="0 0 16 16"> <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> </svg>
          </div>
          <div className='updateUser'>
            Activate User
          </div>
        </div>
      </div>
    </>
  )
}



export function FilterUserOption({showFilter, ...props}:filterUserProps) {

  function handleChange () {

  }

  return (
    <>
      <div className={`filterUserContainer ${showFilter ? 'openfilter': 'close'}`}>
        <form>
          <InputField name='Organization' type='text' placeholder='Select' idAttribute='organization' onChange={handleChange}/>
          <InputField name='Username' type='text' placeholder='User' idAttribute='username' onChange={handleChange}/>
          <InputField name='Email' type='email' placeholder='Email' idAttribute='email' onChange={handleChange}/>
          <InputField name='Date' type='date' placeholder='Date' idAttribute='date' onChange={handleChange}/>
          <InputField name='Phone Number' type='number' placeholder='Phone Number' idAttribute='phoneNumber' onChange={handleChange}/>
          <InputField name='Status' type='text' placeholder='Select' idAttribute='status' onChange={handleChange}/>
          <div className='buttons'>
            <ButtonNoP name='Reset' coloredBg={false}/>
            <ButtonNoP name='Filter' coloredBg={true}/>
          </div>
        </form>
      </div>
      
    </>
  )
}

