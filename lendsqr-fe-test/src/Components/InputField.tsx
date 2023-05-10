import React from 'react';
import './inputfield.scss'

interface Props {
  type: string,
  idAttribute:string,
  name: string,
  placeholder?: string,
  value?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const InputField = ({type, idAttribute, name, placeholder, value, onChange, ...props}: Props) => {
  return (
    <div className='input-container'>
      <label htmlFor={idAttribute} className='block font-medium text-sm text-gray-700 input-label'>
        <span>{name} </span>
      </label>
      <input type={type} id={idAttribute} className={`border border-gray-300 focus:ring-opacity-50 focus:ring focus:ring-indigo-200 px-2 py-2 outline-none rounded-md shadow-sm block w-full mt-1 `} placeholder={placeholder} name={idAttribute} value={value}  autoFocus onChange={onChange}/>
    </div>
  )
}

export default InputField