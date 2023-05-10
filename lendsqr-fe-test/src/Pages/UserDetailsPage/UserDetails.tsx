import React, {useState} from 'react';
import './userdetails.scss'
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import Avatar from '../../Images/avatar.png';
import { useQuery } from 'react-query';
import Star from '../../Images/star.png';
import StarBg from '../../Images/starbg.png';
import UserDetailsBodyLayout from '../../Components/UserDetailsBodyLayout';
import UserIdentity from '../../Components/UserIdentity';


const UserDetails: React.FC = () => {

  const [sideBarIsShowing, setSideBarIsShowing] = useState<boolean>(false);

  const {isLoading, data, error} = useQuery('users', () => 
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1').then(res =>
      res.json()
  ))


  if(isLoading) {
    return <h1>Loading User...</h1>
  }

  if(error) {
    return <h1>Unable to fetch user</h1>
  }

  return (
    <>Personal Information
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
                    <h4> &#8358;{data.accountBalance}</h4>
                    <p>{`${data.accountNumber}/Providus Bank`}</p>
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
              <div className='user-information'>
                <UserDetailsBodyLayout headName='Personal Information'>
                  <UserIdentity identityHead='FULL NAME' identityValue={`${data.profile.firstName} ${data.profile.lastName}`}/>
                  <UserIdentity identityHead='PHONE NUMBER' identityValue={`${data.profile.phoneNumber}`}/>
                  <UserIdentity identityHead='EMAIL ADDRESS' identityValue={`${data.emaidl}`}/>
                  <UserIdentity identityHead='BVN' identityValue={`${data.profile.bvn}`}/>
                  <UserIdentity identityHead='GENDER' identityValue={`${data.profile.gender}`}/>
                  <UserIdentity identityHead='MARITAL STATUS' identityValue='Single'/>
                  <UserIdentity identityHead='CHILDREN' identityValue='None'/>
                  <UserIdentity identityHead='TYPE OF RESIDENCE' identityValue={`${data.profile.address}`}/>
                </UserDetailsBodyLayout>
                <UserDetailsBodyLayout headName='Education and Employment'>
                  <UserIdentity identityHead='LEVEL OF EDUCATION' identityValue={`${data.education.level}`}/>
                  <UserIdentity identityHead='EMPLOYMENT STATUS' identityValue={`${data.education.employmentStatus}`}/>
                  <UserIdentity identityHead='SECTOR OF EMPLOYMENT' identityValue={`${data.education.sector}`}/>
                  <UserIdentity identityHead='DURATION OF EMPLOYMENT' identityValue={`${data.education.duration}`}/>
                  <UserIdentity identityHead='OFFICE EMAIL' identityValue={`${data.education.officeEmail}`}/>
                  <UserIdentity identityHead='MONTHLY INCCOME' identityValue={`N${data.education.monthlyIncome[1]} - N${data.education.monthlyIncome[0]}`}/>
                  <UserIdentity identityHead='LOAN REPAYMENT' identityValue={`N${data.education.loanRepayment}`}/>
                  
                </UserDetailsBodyLayout>
                <UserDetailsBodyLayout headName='Social'>
                  <UserIdentity identityHead='TWITTER' identityValue={`${data.socials.twitter}`}/>
                  <UserIdentity identityHead='FACEBOOK' identityValue={`${data.socials.facebook}`}/>
                  <UserIdentity identityHead='INSTAGRAM' identityValue={`${data.socials.instagram}`}/>
                </UserDetailsBodyLayout>
                <UserDetailsBodyLayout headName='Guarantor'>
                  <UserIdentity identityHead='FULL NAME' identityValue={`${data.guarantor.firstName} ${data.guarantor.lastName}`}/>
                  <UserIdentity identityHead='PHONE NUMBER' identityValue={`${data.guarantor.phoneNumber}`}/>
                  <UserIdentity identityHead='EMAIL ADDRESS' identityValue={`${data.guarantor.email}`}/>
                  <UserIdentity identityHead='RELATIONSHIP' identityValue={`${data.guarantor.gender}`}/>
                  
                </UserDetailsBodyLayout>
              </div>
            </div>
            
          </aside>
        </main>
      </div>

    </>
  )
}

export default UserDetails