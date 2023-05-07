import React from 'react';
import {format} from 'date-fns';
import  parsePhoneNumber  from 'libphonenumber-js';
import ThreeDot from '../Images/threedot.png';

interface Props {
  data: any | undefined;
}

interface Profile {
  firstName:string;
  lastName: string;
}

interface User {
  orgName: string;
  profile: Profile;
  email: string;
  phoneNumber: string;
  createdAt: string;
  id: number;
}


const Items: React.FC<Props> = ({data}) => {

  const displayUserDetails = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, id: number) => {
    console.log('Checking this out')
    console.log(id)

  }

  return (
    <>
      {data?.map((user: User) => {
            return (
              <tr key={user.id} onClick={(event)=> { displayUserDetails(event, user.id)}}>
                <td>{user.orgName.split('-')[0]}</td>
                <td>{`${user.profile.firstName} ${user.profile.lastName}`}</td>
                <td>{user.email.toLocaleLowerCase()}</td>
                <td>{parsePhoneNumber(user.phoneNumber, 'NG')?.formatNational().split('ext')[0]}</td>
                <td>{format(new Date(user.createdAt), "E d, yyyy hh:mm aaaaa'm'")}</td>
                <td><p className='status active'>Active</p></td>
                <td><img src={ThreeDot} alt="user menu" /></td>
              </tr>
            )
            
          })}
      
    </>
  )
}

export default Items
