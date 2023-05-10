import React from 'react'
import './useridentity.scss'

interface Props {
  identityHead: string;
  identityValue: string
}

const UserIdentity = ({identityHead, identityValue, ...props}:Props) => {
  return (
    <div className='identity'>
      <p>{identityHead}</p>
      <h4>{identityValue}</h4>
    </div>
  )
}

export default UserIdentity
