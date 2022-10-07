import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {MdEmail, MdSubtitles} from 'react-icons/md';
import {FaUserAlt} from 'react-icons/fa';
import {BsTelephoneFill} from 'react-icons/bs';
import CartComp from './cartComponent';
import { useSelector } from 'react-redux';
import axios from 'axios';
const ProfilePage = () => {
  const profileData = useSelector((state) => state.login.data || state.signup.data);
  const token = localStorage.getItem('token') || '';
  console.log(token)
  useEffect(() => {
    axios.get('https://omar-tech-store.herokuapp.com/apisers/profile'
    )
    .then((res) => {
      console.log('res', res);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [token])
  console.log(profileData);
  return (
    <div>
      <Header />
      <div className='w-[100%] block relative z-0'>
          <div className='header fixed w-[100%]  bg-cover bg-[url(https://live.staticflickr.com/2598/5853347472_89637f84d3_b.jpg)] flex justify-end pr-[3rem]'>
            <div className='w-[60%] flex  justify-around p-[2rem] h-[9rem] mt-[6rem] '>
              <div className='flex flex-col h-full justify-between '>
                <div className='flex gap-3 items-center my-[.3rem]'>
                  <FaUserAlt  className='text-gray-500' />
                  <p className='font-bold'>User Name</p>
                  <p className='text-gray-500'>Abdullah AL-Lahham</p>
                </div>
                <div className='flex gap-3 mt-[1.5rem] items-center my-[.3rem]  '>
                  <MdSubtitles className='text-gray-500' />
                  <p className='font-bold'>Title</p>
                  <p className='text-gray-500'>Software Engineering</p>
                </div>
              </div>
              <div className='flex flex-col h-full justify-between  items-center my-[.3rem]'>
                <div className='flex gap-3'>
                  <MdEmail className='text-gray-500' />
                  <p className='font-bold'>Address</p>
                  <p className='text-gray-500'>Palestine, khanyounis</p>
                </div>
                <div className='flex gap-3 mt-[1.5rem] items-center my-[.3rem]'>
                  <BsTelephoneFill  className='text-gray-500'/>
                  <p className='font-bold'>cell Phone</p>
                  <p className='text-gray-500'>+972 59 231 1426</p>
                </div>
              </div>
            </div>
            <img src='https://www.smartappseg.com/images/y.png' className='rounded-full object-cover w-[12rem] h-[12rem] absolute left-[15rem] -bottom-[5.5rem]' />
          </div>
          <div className='flex min-w-[100%] pt-[15rem]'>
            <div className='flex flex-col jusify-around h-full w-[14rem] bg-gray-200'>
              <div className='flex flex-col jusify-around h-[70%] p-[2rem]'>
                <p className='mt-[2rem] text-gray-700 w-[100%] pl-[1rem] h-[2rem] border-l-[6px] border-orange-500'>My Orders</p>
                <p className='mt-[2rem] text-gray-700 w-[100%] pl-[1rem] h-[2rem] '>Wishlist</p>
                <p className='mt-[2rem] text-gray-700 w-[100%] pl-[1rem] h-[2rem] '>Notifications</p>
                <p className='mt-[2rem] text-gray-700 w-[100%] pl-[1rem] h-[2rem] '>Settings</p>
              </div>
              <button className='p-[2rem] -ml-[2rem] w-[100%] text-red-600 cursor-pointer'>logout</button>
            </div>
            <div className='border w-[70%] m-auto p-[1rem] pt-0 border-gray-400 flex flex-wrap justify-center'>
              <CartComp /><CartComp />
              <CartComp /><CartComp />
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProfilePage
 