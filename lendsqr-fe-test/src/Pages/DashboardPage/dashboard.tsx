import React, {useState} from 'react';
import './dashboard.scss'
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import UserCard from '../../Components/UserCard';
import {HiUserGroup} from 'react-icons/hi'
import Table from '../../Components/Table';
import { useQuery } from 'react-query';
import axios from 'axios';

const Dashboard: React.FC = () => {

  const [sideBarIsShowing, setSideBarIsShowing] = useState<boolean>(false);

  const {isLoading, data} = useQuery('users', () => {
    return axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }
   
  
  return (
    <div className='dashboard-container'>
      <Header setSideBarIsShowing={setSideBarIsShowing} sideBarIsShowing={sideBarIsShowing}/>
      <main>
        <SideBar sideBarIsShowing={sideBarIsShowing}/>
        <aside className='users-data-container'>
          <h1 className='users-data-head'>Users</h1>
          <div className='user-cards-container'>
            <UserCard users={{
              head: 'Active Users',
              cardLogo: <HiUserGroup />,
              userNum: 2345
            }}/>
            <UserCard users={{
              head: 'Active Users',
              cardLogo: <HiUserGroup />,
              userNum: 2345
            }}/>
            <UserCard users={{
              head: 'Active Users',
              cardLogo: <HiUserGroup />,
              userNum: 2345
            }}/>
            <UserCard users={{
              head: 'Active Users',
              cardLogo: <HiUserGroup />,
              userNum: 2345

            }}/>
          </div>
          <div>
            <Table data={data} itemsPerPage={10}/>
          </div>
        </aside>
        
      </main>
    </div>
  )
}

export default Dashboard
