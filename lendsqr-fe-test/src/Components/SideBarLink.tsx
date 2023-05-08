import React from 'react';
import { SideBarLinkObject } from '../models';
import './sidebarlink.scss';
import arrowDown from '../Images/vector2.png'

interface Props {
  sideBarLink: SideBarLinkObject
}


const SideBarLink: React.FC<Props> = ({sideBarLink}) => {
  return (
    <>
      <div className='sidebarlink-container'>
        <div className='sidebarlink-logo'>
          {sideBarLink.logo}
        </div>
        <div className='sidebarlinkname'>{sideBarLink.linkName}</div>
        <div className='sideBarLinkArrow'>
          {sideBarLink.arrow && <img alt='Arrow Down Logo' src={arrowDown}></img>} 
        </div>
      </div>
    </>
  )
}

export default SideBarLink