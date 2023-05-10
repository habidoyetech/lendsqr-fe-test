import React, {useState} from 'react';
import {format} from 'date-fns';
import  parsePhoneNumber  from 'libphonenumber-js';
import ThreeDot from '../Images/threedot.png';
import { DashboardUpdateUserStatusOptions } from './DashboardOptions';

interface Props {
  data: any | undefined;
}

// interface Profile {
//   firstName:string;
//   lastName: string;
// }

// interface User {
//   orgName: string;
//   profile: Profile;
//   email: string;
//   phoneNumber: string;
//   createdAt: string;
//   id: number;
// }


const Items: React.FC<Props> = ({data}) => {

  const [showUpdate, setShowUpdate] = useState(false)

  const displayUserDetails = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, id: number) => {
    console.log('Checking this out')
    console.log(id)

  }

  return (
    <>
      
      <tr onClick={(event)=> { displayUserDetails(event, data.id)}}>
        <td>{data.orgName.split('-')[0]}</td>
        <td>{`${data.profile.firstName} ${data.profile.lastName}`}</td>
        <td>{data.email.toLocaleLowerCase()}</td>
        <td>{parsePhoneNumber(data.phoneNumber, 'NG')?.formatNational().split('ext')[0]}</td>
        <td>{format(new Date(data.createdAt), "E d, yyyy hh:mm aaaaa'm'")}</td>
        <td><p className='status active'>Active</p></td>
        <td onClick={()=> {setShowUpdate(!showUpdate)}}>
          <img src={ThreeDot} alt="user menu" />
          <DashboardUpdateUserStatusOptions showUpdate={showUpdate} />
        </td>
      </tr>
         
      
    </>
  )
}

export default Items
