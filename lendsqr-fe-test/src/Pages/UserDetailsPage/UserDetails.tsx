import React, {useState} from 'react';
import './userdetails.scss'
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import Avatar from '../../Images/avatar.png';
import { useQuery } from 'react-query';
import Star from '../../Images/star.png';
import StarBg from '../../Images/starbg.png';


const UserDetails: React.FC = () => {

  const [sideBarIsShowing, setSideBarIsShowing] = useState<boolean>(false);

  const {isLoading, data, error} = useQuery('users', () => 
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1').then(res =>
      res.json()
  ))


  if(isLoading) {
    return <>Loading User...</>
  }

  return (
    <>
      <div className='user_details_container'>
        <Header setSideBarIsShowing={setSideBarIsShowing} sideBarIsShowing={sideBarIsShowing}/>
        <main>
          <SideBar sideBarIsShowing={sideBarIsShowing}/>
          <aside className='user_data-container'>
            <div className='back'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg>
              </div>
              <p>Back to Users</p>
            </div>
            <div className='user-header'>
              <h3>User Details</h3>
              <div>
                <button type="submit" className="white border-red">
                  Blacklist User
                </button>
                <button type="submit" className="white border-purple">
                  Activate User
                </button>
              </div>
            </div>
            <div className='user-info-container'>
              <div className='user-info-head-container'>
                <div className='user-info-head'>
                  <div className='head-info'>
                    <div className='head-avatar-container'>
                      <img src={Avatar} alt="avatar" />
                    </div>
                    <div className='username'>
                      <div>
                        <h4> {data?.profile.firstName} {data?.profile.lastName}</h4>
                        <p>{data.accountNumber}</p>
                      </div>
                    </div>
                  </div>
                  <div className='user-star'>
                    <p>User tier's</p>
                    <div>
                      <img src={StarBg} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                    </div>
                  </div>
                  <div className='amount'>
                    <h4> &#8358;200,000.00</h4>
                    <p>0233822850/Providus Bank</p>
                  </div>
                </div>
                <ul className='head-link'>
                  <li>General Details</li>
                  <li>Documents</li>
                  <li>Bank Details</li>
                  <li>Loans</li>
                  <li>Savings</li>
                  <li>App and System</li>
                </ul>
              </div>
            </div>
          </aside>
        </main>
      </div>

    </>
  )
}

export default UserDetails