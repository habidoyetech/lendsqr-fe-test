import React from 'react';
import { UserCardModel } from '../models';
import './usercard.scss'


interface Props {
  users: UserCardModel
}

const UserCard: React.FC<Props> = ({users}) => {
  return (
    <div className='user-card-container'>
      <div className='user-card'>
        <div className='user-card-logo-container'>
          {users.cardLogo}
        </div>
        <div className='user-card-body'>
          <h4 className='user-card-body-head'>{users.head}</h4>
          <h1 className='user-card-body-number'>{users.userNum}</h1>
        </div>
      </div>
    </div>
  )
}

export default UserCard