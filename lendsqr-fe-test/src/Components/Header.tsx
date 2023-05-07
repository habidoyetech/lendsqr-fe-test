import React from 'react';
import LogoWord from '../Images/lendsqr.svg';
import LogoSign from '../Images/Union.svg';
import './header.scss';
import {HiOutlineSearch} from 'react-icons/hi';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import bell from '../Images/Vector.png';
import userImage from '../Images/image.png';
import VectorTwo from '../Images/vector1.png';

interface Props {
  sideBarIsShowing: boolean;
  setSideBarIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({sideBarIsShowing, setSideBarIsShowing}) => {

 

  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <div className='sidebar-menu' onClick={()=> setSideBarIsShowing(!sideBarIsShowing)}>
            {sideBarIsShowing? <AiOutlineClose/>:<AiOutlineMenu />}
          </div>
          <div className='lendsqr-logo-container'>
            <img className='lensqr-logo-sign' src={LogoSign} alt="lendsqr-logo-sign" />
            <img className='lendsqr-logo-word' src={LogoWord} alt="lendsqr-logo-name" />
          </div>
          <div className='search-container opaque'>
            <div className='search-input-container'>
              <input className='search-input' type="text" placeholder='Search for anything'/>
            </div>
            <div className='search-icon-container'>
              <span className='search-icon'><HiOutlineSearch className='icon'/></span>
            </div>
          </div>
          <div  className='user'>
            <span className='docs'>Docs</span>
            <div className='bells'><img src={bell} alt="notification bell" /></div>
            <div className='user-container'>
              <img className='user-photo' src={userImage} alt="userimage"/>
              <h3 className='username'>Adedeji</h3>
              <img className='arrow' src={VectorTwo} alt="arrow"/>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header