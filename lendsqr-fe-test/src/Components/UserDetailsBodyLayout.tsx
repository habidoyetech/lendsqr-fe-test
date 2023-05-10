import React, {ReactNode} from 'react';
import './userdetailsbodylayout.scss'

interface Props {
  headName: string
  children: ReactNode
}

const UserDetailsBodyLayout = ({headName, children, ...props}:Props) => {
  return (
    <section className='user-details-body-section'>
      <h2 className='section-head'>{headName}</h2>
      <div className='section-details'>
        {children}
      </div>
      
    </section>
  )
}

export default UserDetailsBodyLayout
