import React from 'react'
import './menu.css';
import {GrLogout} from 'react-icons/gr';
import {BsPersonCircle} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Menu = () => {
  const deleteCurrentUser = () => {
    localStorage.setItem('token', '');
  }
  return (
    <div className='w-[19rem] h-[9rem] flex flex-col justify-between border-orange rounded-md p-[1rem] pb-0 absolute right-[3rem] top-[5rem] bg-gray-50 '>
      <div className='flex items-center gap-2 border-b border-gray-200  py-[.5rem] pt-0'>
        <BsPersonCircle className='w-[2rem] h-[2rem]' />
        <p className=' text-blue-600 font-semibold'>User name</p>
      </div>
      <Link to='/profile' className='border-b border-gray-200 py-[.5rem] text-blue-600 font-semibold'>My Profile</Link>
      <div className='flex gap-2 border-b items-center py-[.5rem] text-gray-400'>
        <GrLogout />
        <Link to='/login' onClick={() => deleteCurrentUser()} className='text-gray-400'>LogOut</Link>
      </div>
    </div>
  )
}

export default Menu
