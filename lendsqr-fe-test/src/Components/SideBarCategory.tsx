import React from 'react';
import { SideBarCategoryObject } from '../models';
import SideBarLink from './SideBarLink';


interface Props {
  category: SideBarCategoryObject
}

const SideBarCategory: React.FC<Props> = ({category}) => {
  return (
    <ul>
      <h2>{category.name}</h2>
      <div>
        
        {category.link.map((link, index) => {
            return (
                <li key={index}><SideBarLink sideBarLink={link}/></li>
            )
        })}
      </div>
    </ul>
  )
}

export default SideBarCategory