import React from 'react'
import './nav.css';
const Nav = () => {
  return (
    <div className='navbar'>
      <div className=" flex items-center justify-between  my-auto h-full mx-[10rem] text-[#fff] ">
        <p className='text-3xl '>Get 50% Off</p>
        <button className='border border-gray-400 text-gray-200 hover:bg-orange-600 cursor-pointer p-[.5rem] '>Start Shopping</button>
      </div>
    </div>
  )
}

export default Nav
